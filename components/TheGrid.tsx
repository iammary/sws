import * as React from 'react';
import TheGridItem from './TheGridItem';
import StockObject from '../interfaces';
import InfiniteScroll from 'react-infinite-scroller';

const __DEBUG__ = process.env.NODE_ENV === 'development';
const SIZE      = 100;
const API_URL   = 'https://simplywall.st/api/grid/filter?include=info%2Cscore';

interface TGState {
  offset: number;
  isLastFetch: boolean;
  loading: boolean;
  stocks: Array<StockObject>;
}

interface TGProps {
  // your props
}

class TheGrid extends React.Component<TGProps, TGState> {
  state: TGState;

  constructor ( props: TGProps ) {
    super( props );
    this.state = {
      offset      : 0,
      loading     : false,
      isLastFetch : false,
      stocks      : []
    };
  }

  public loadItems = () => {
    __DEBUG__ && console.log( 'this.state: %o', this.state );
    __DEBUG__ && console.log( 'Fetching Data offset: %o', this.state.offset );

    fetch( API_URL, {
      method  : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Accept'       : 'application/vnd.simplywallst.v2'
      },
      body    : JSON.stringify( {
        'offset' : this.state.offset,
        'size'   : SIZE,
        'rules'  : [
          [ 'is_fund', '=', 'false' ],
          [ 'primary_flag', '=', 'true' ],
          [ 'analyst_count', '>', '0' ],
          [ 'country_name', '=', 'AU' ],
          [ 'value_score', '>', 1 ],
          [ 'order_by', 'market_cap', 'desc' ]
        ]
      } )
    } ).then( r => r.json() ).then( res => {
      __DEBUG__ && console.log( 'res: %o', res );
      const NEXT_OFFSET = this.state.offset + SIZE;
      this.setState( {
        stocks      : this.state.stocks.concat( res.data ),
        offset      : NEXT_OFFSET,
        isLastFetch : NEXT_OFFSET < res.meta.total_records
      } );
    } );
  };

  public componentDidMount () {
    this.loadItems();
  }

  render () {
    __DEBUG__ && console.log( 'this.state.stocks: %o', this.state.stocks );

    if ( !this.state.stocks.length ) {
      return <div className="container">Loading</div>;
    }

    return (
      <div className="container">
        <InfiniteScroll
          pageStart={ 0 }
          className="row"
          loadMore={ this.loadItems }
          hasMore={ this.state.isLastFetch }
          loader={ <div className="loader">Loading ...</div> }
          useWindow={ true }>
          { this.state.stocks.map( ( stock, i ) => <TheGridItem stock={ stock } key={ i }/> ) }
        </InfiniteScroll>
      </div>
    );
  }
}

export default TheGrid;

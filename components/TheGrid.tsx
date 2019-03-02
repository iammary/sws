import * as React from 'react';
import TheGridItem from './TheGridItem';
import { GridState } from '../interfaces';
import * as InfiniteScroll from 'react-infinite-scroller';
import Loader from './Loader';
import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

const SIZE      = 9;
const API_URL = 'https://simplywall.st/api/grid/filter?include=info%2Cscore';

class TheGrid extends React.Component<any, GridState> {
  state: GridState;

  constructor ( props: any ) {
    super( props );
    this.state = {
      offset      : 0,
      loading     : false,
      isLastFetch : false,
      stocks      : []
    };
  }

  public loadItems = () => {
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
      const NEXT_OFFSET = this.state.offset + SIZE;

      this.setState( {
        stocks      : this.state.stocks.concat( res.data ),
        offset      : NEXT_OFFSET,
        isLastFetch : NEXT_OFFSET < res.meta.total_records
      } );
    } );
  };

  public componentDidMount () {
    try {
      this.loadItems();
    } catch ( error ) {
    }
  }

  render () {
    const MyLoader = <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6"><Loader/></div>
        <div className="col-lg-4 col-sm-6"><Loader/></div>
        <div className="col-lg-4 col-sm-6"><Loader/></div>
      </div>
    </div>;

    if ( !this.state.stocks.length ) {
      return MyLoader;
    }

    return (
      <div className="container">
        <InfiniteScroll
          pageStart={ 0 }
          className="row"
          loadMore={ this.loadItems }
          hasMore={ this.state.isLastFetch }
          loader={ <div style={ { width : '100%' } } key={ 0 }>{ MyLoader }</div> }
          useWindow={ true }>
          { this.state.stocks.map( ( stock, i ) => <TheGridItem stock={ stock } key={ i }/> ) }
        </InfiniteScroll>
      </div>
    );
  }
}

export default TheGrid;

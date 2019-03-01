import * as React from 'react'
import TheGridItem from "./TheGridItem";

const __DEBUG__ = process.env.NODE_ENV === 'development';
const SIZE = 100;

interface TGState {
  offset: number;
  isLastFetch: boolean;
  loading: boolean;
  stocks: Array<object>;
}

interface TGProps {
  // your props
}

class TheGrid extends React.Component<TGProps, TGState> {
  state: TGState;

  constructor(props: TGProps) {
    super(props);
    this.state = {
      offset: 0,
      loading: false,
      isLastFetch: false,
      stocks: []
    };
  }

  loadItems() {
    __DEBUG__ && console.log('Fetching Data offset: %o', this.state.offset);
    fetch('https://simplywall.st/api/grid/filter?include=info%2Cscore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.simplywallst.v2'
      },
      body: JSON.stringify({
        "offset": this.state.offset,
        "size": SIZE,
        "rules": [
          ["is_fund", "=", "false"],
          ["primary_flag", "=", "true"],
          ["analyst_count", ">", "0"],
          ["country_name", "=", "AU"],
          ["value_score", ">", 1],
          ["order_by", "market_cap", "desc"]
        ]
      })
    }).then(r => r.json()).then(res => {
      __DEBUG__ && console.log('res: %o', res);
      let prevData = this.state.stocks.concat(res.data);

      this.setState({
        stocks: prevData,
        offset: this.state.offset + SIZE
      })
    });
  }

  public componentDidMount() {
    this.loadItems()
  }

  render() {
    __DEBUG__ && console.log('this.state.stocks: %o', this.state.stocks);

    if (!this.state.stocks.length) {
      return <div>Loading</div>
    }
    
    return (
      <div>
        {this.state.stocks.map((stock, i) => <TheGridItem stock={stock} key={i}/>)}
      </div>
    )
  }
}

export default TheGrid

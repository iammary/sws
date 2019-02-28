import * as React from 'react'

interface TGState {
  offset: number;
  isLastFetch: boolean;
  loading: boolean;
}

interface TGProps {
  // your props
}

class TheGrid extends React.Component<TGProps, TGState> {
  constructor(props: TGProps) {
    super(props);
    this.state = {
      offset: 0,
      loading: false,
      isLastFetch: false
    };
  }

  public componentDidMount() {
    console.log('fetching data')
    fetch('https://simplywall.st/api/grid/filter?include=info%2Cscore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.simplywallst.v2'
      },
      body: JSON.stringify({
        "offset": 0,
        "size": 100,
        "rules": [
          ["is_fund", "=", "false"],
          ["primary_flag", "=", "true"],
          ["analyst_count", ">", "0"],
          ["country_name", "=", "AU"],
          ["value_score", ">", 1],
          ["order_by", "market_cap", "desc"]
        ]
      })
    }).then(r => r.json()).then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default TheGrid

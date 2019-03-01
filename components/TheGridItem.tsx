import * as React from 'react'

const __DEBUG__ = process.env.NODE_ENV === 'development';


interface IState {
}

interface Stock {
  name: string;
}

interface IProps {
  stock: Stock;
}

class TheGridItem extends React.Component<IProps, IState> {

  render() {
    __DEBUG__ && console.log('this.props: %o', this.props);
    const { stock } = this.props;
    return (
      <div>
        { stock.name }
      </div>
    )
  }
}

export default TheGridItem

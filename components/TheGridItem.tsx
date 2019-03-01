import * as React from 'react';
import StockObject from '../interfaces';

const __DEBUG__ = process.env.NODE_ENV === 'development';

interface IProps {
  stock: StockObject;
}

class TheGridItem extends React.Component<IProps> {

  render () {
    __DEBUG__ && console.log( 'this.props: %o', this.props );
    const { stock } = this.props;
    return (
      <div className="col-lg-4 col-sm-6">
        { stock.name }
      </div>
    );
  }
}

export default TheGridItem;

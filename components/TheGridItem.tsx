import * as React from 'react';
import StockObject from '../interfaces';
import { Radar } from 'react-chartjs-2';
import { generateColor } from '../utils';
import { CHART_OPTIONS } from '../constants';
import { StockBox, PeekDescription } from '../styles';

const __DEBUG__ = process.env.NODE_ENV === 'development';

interface IProps {
  stock: StockObject
}

class TheGridItem extends React.Component<IProps> {

  render () {
    const { stock } = this.props;
    const score     = stock.score.data;
    const info      = stock.info.data;

    __DEBUG__ && console.log( 'stock: %o', stock );

    return (
      <div className="col-lg-4 col-sm-6">
        <StockBox>
          <h2>{ stock.name }</h2>
          <div>
            <Radar
              height={ 300 }
              data={ {
                labels   : [ 'VALUE', 'FUTURE', 'PAST', 'HEALTH', 'DIVIDEND' ],
                datasets : [ {
                  lineTension     : 0.5,
                  backgroundColor : generateColor( score.total, 0.4 ),
                  borderColor     : generateColor( score.total ),
                  data            : [ score.value, score.future, score.past, score.health, score.income ]
                } ]
              } }
              options={ CHART_OPTIONS }
            />
          </div>
          <PeekDescription>
            <p>{ info.description }</p>
            <div className="overlay">
              <img className="cover" src={ `https://simplywall.st${ info.cover_small_url }` } alt=""/>
              <div className="stockInfo">
                <img className="stockLogo" src={ `https://simplywall.st${ info.logo_url }` } alt=""/>
                <div className="stockSymbol">
                  { stock.unique_symbol }
                </div>
              </div>
            </div>
          </PeekDescription>
        </StockBox>
      </div>
    );
  }
}

export default TheGridItem;

import * as React from 'react';
import Layout from '../components/Layout';
import TheGrid from '../components/TheGrid';
import { MainContainer, BackBlur, GridHeader } from '../styles';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="The Grid in Next.js + TypeScript | Simply Wall St">
      <BackBlur>
        <MainContainer>
        </MainContainer>
      </BackBlur>
      <div className="container">
        <div className="row">
          <div className="col">
            <GridHeader>
              <img src="/static/Plant.png" alt="high growth | simply wall street" />
              <div>
                <h1>High Growth Potential</h1>
                <h3>Companies that analysts expect to have high earnings, revenue or cash flow growth in the next 3
                  years.</h3>
              </div>
            </GridHeader>
          </div>
        </div>
      </div>
      <TheGrid/>
    </Layout>
  );
};

export default IndexPage;

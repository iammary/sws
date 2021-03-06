import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GlobalStyle, Header, Footer } from '../styles';
import { Normalize } from 'styled-normalize';

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ( { children, title = 'The Grid | Simply Wall Street' } ) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css"
            rel="stylesheet"/>
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
    <Normalize/>
    <GlobalStyle/>
    <Header>
      <Link href='/'><img src="/static/logo.png" alt="Simply Wall St logo"/></Link>
    </Header>
    { children }
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col">
            ❤️ Submitted by <a href="http://www.jes.ph/" target="_blank">Jes Anub</a>
          </div>
        </div>
      </div>
    </Footer>
  </div>
);

export default Layout;

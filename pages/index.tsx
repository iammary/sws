import * as React from 'react'
import Layout from '../components/Layout'
import TheGrid from '../components/TheGrid'

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="The Grid in Next.js + TypeScript | Simply Wall St">
      <h1>High Growth Potential</h1>
      <h3>Companies that analysts expect to have high earnings, revenue or cash flow growth in the next 3
        years.</h3>
      <TheGrid/>
    </Layout>
  )
}

export default IndexPage;

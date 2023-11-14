import * as React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const FourPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto  grid grid-cols-3 p-4 gap-4 mt-28">
        <div className="col-span-2	 ">
          <h1>Page not found</h1>
        </div>
      </div>



    </Layout>
  )
}

export default FourPage

export const Head = () => <title>404 page</title>

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
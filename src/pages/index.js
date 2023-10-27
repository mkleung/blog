import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto  grid grid-cols-3 p-4 gap-4 mt-28">
        <div className="col-span-2	 ">
          <main>
           
            <h1><Trans>Welcome to my Gatsby site!</Trans></h1>
            <p><Trans>My name is Shanika</Trans></p>
            <p><Trans>My profession is SSE</Trans></p>
            <p><Trans>My Birthday is 1990/10/10</Trans></p>
            <p>{t('message')}</p>
          </main>
        </div>
      </div>

        
 
    </Layout>
  )
}

export default IndexPage

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
import * as React from "react"

import Layout from "../components/layout"
import HeroContact from "../components/herocontact"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const ContactPage = () => {

    return (
        <Layout>

            <div className="container max-w-2xl mx-auto p-4 py-8">
                {/* <Jumbotron /> */}
                <h3 className=" mb-5 mainTitle"><Trans>contact me</Trans></h3>
                <HeroContact />
            </div>

        </Layout>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

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
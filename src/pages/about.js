import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from "../components/layout"
import { graphql } from 'gatsby';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about container max-w-2xl mx-auto p-4 py-8">

        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle">
        <Trans>about me</Trans>
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p className="py-2 text-gray-700">
              <Trans>about1</Trans>
            </p>
            <p className="py-2 text-gray-700">
              <Trans>about2</Trans>
            </p>
            <p className="py-2 text-gray-700">
              <Trans>about3</Trans>
              &nbsp;<a href="https://www.flickr.com/photos/167281095@N07/" target="_blank"><Trans>about4</Trans></a>
            </p>
          </div>
          <div className="flex justify-center items-right		">
              <StaticImage src="../images/mike2.JPG" placeholder="blurred"
              layout="fixed"
              height={150}
              width={150}
              className="	mt-5 mb-2" alt="developer" />
          </div>
        </div>



      </div>

  

    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

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
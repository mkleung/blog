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
            <h1 className="mainTitle"><Trans>Hi I'm Michael Leung</Trans></h1>
            <h2 className="mt-1"><Trans>Welcome to my website</Trans></h2>
            <p className="mb-10 mt-10 text-gray-700">
              <Trans>Im a software developer</Trans> <span className="highlight"><Trans>amazing websites</Trans>.</span>
            </p>
            <Link to="/about" className=" bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              <Trans>about me</Trans>
            </Link>
          </div>
          <div className="	 ">
            <StaticImage src="../images/mike.JPG" placeholder="blurred"
              layout="fixed"
              height={100}
              className="mx-auto rounded-full mt-5" alt="developer" />
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
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';


const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">
        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle"><Trans>projects</Trans></h3>

        <div className="container m-auto grid grid-cols-1 ">


            {/* REACT  */}
            <div className="block max-w-xl p-2 transition-colors duration-500 ease-in-out bg-white border border-gray-200 rounded-lg shadow hover:bg-teal-100 dark:bg-teal-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">100 Days of ReactJS challenge</p>
              <p className="">
                I have completed the 100 days of learning React
                <br /><br /><a href="https://github.com/mkleung/100daysofReact" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">
                  <Trans>view</Trans></a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#react</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#redux</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#html</span>
            </div>
          </div>

          {/* CSS  */}
          <div className="block max-w-xl p-2 transition-colors duration-500 ease-in-out bg-white border border-gray-200 rounded-lg shadow hover:bg-teal-100 dark:bg-teal-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">100 Days of CSS challenge</p>
              <p className="">
                I have completed the 100 days of css challenge as a creative learning process
                <br /><br /><a href="https://codepen.io/mkleung" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">
                  <Trans>view</Trans></a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#css</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#sass</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#html</span>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects </title>

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
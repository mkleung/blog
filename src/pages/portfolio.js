import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';


const PortfolioPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">
        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle"><Trans>portfolio</Trans></h3>

        <div className="container m-auto grid grid-cols-1 ">

          {/* JW FOODS  */}
          <div className="block max-w-xl p-2  border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">JW Foods</p>
              <p className="">
                This full stack web application is a project I did to learn tailwindcss, flask and mongodb
                <br /><br /><a href="https://mkleung.github.io/jwfoods/" className="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">
                <Trans>view</Trans></a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ">#python</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#flask</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#nosql</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#React</span>
            </div>
          </div>


        </div>
      </div>

      <div className="container max-w-2xl mx-auto p-4 py-8">
        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle"><Trans>projects</Trans></h3>

        <div className="container m-auto grid grid-cols-1 ">


          {/* REACT  */}
          <div className="block max-w-xl p-2  border border-gray-200 rounded-lg shadow    dark:border-gray-700  mb-5">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">100 Days of ReactJS challenge</p>
              <p className="">
                I have completed the 100 days of learning React
                <br /><br /><a href="https://github.com/mkleung/100daysofReact" className="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">
                  <Trans>view</Trans></a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#react</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#redux</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#html</span>
            </div>
          </div>

          {/* CSS  */}
          <div className="block max-w-xl p-2  border border-gray-200 rounded-lg shadow  dark:border-gray-700 mb-5">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">100 Days of CSS challenge</p>
              <p className="">
                I have completed the 100 days of css challenge as a creative learning process
                <br /><br /><a href="https://codepen.io/mkleung" className="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">
                  <Trans>view</Trans></a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#css</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#sass</span>
              <span className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#html</span>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

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
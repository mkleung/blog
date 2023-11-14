import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';


const LearnPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">
        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle"><Trans>learn</Trans></h3>

<div class="mb-4">
<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ">
          React</span>
</div>
        


        <div className="container m-auto grid grid-cols-2 gap-4">
         
         {/* 6 */}

         <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-4">
              React Project 6 - Quiz app
            </p>
            <a target="_blank" href="https://bhm6v.csb.app/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>


          {/* 5 */}
          <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-4">
              React Project 5 - To do list
            </p>
            <a target="_blank" href="https://ri74q.csb.app/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>

          {/* 4 */}
          <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-4">
              React Project 4 - Calculator
            </p>
            <a target="_blank" href="https://193rm.codesandbox.io/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>

          {/* 3  */}
          <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-4">
              React Project 3 - Calendar
            </p>
            <a target="_blank" href="https://193rm.codesandbox.io/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>

          {/* 2  */}
          <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-2">
              React Project 2 - Stopwatch
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Props</li>
              <li>prevState</li>
              <li>Bind</li>
            </ul>
            <a target="_blank" href="https://6fr6p.codesandbox.io/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>


          {/* 1  */}
          <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class=" title font-bold text-l mb-2">
              React Project 1 - Button Counter
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Function Components</li>
              <li>Class Components</li>
              <li>SetState</li>
            </ul>
            <a target="_blank" href="https://t2f9h.codesandbox.io/" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              View Demo
            </a>
            <a target="_blank" href="https://github.com/mkleung/100daysofReact" class="transition-colors duration-500 ease-in-out  bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              Code
            </a>
          </div>



        </div>
      </div>
    </Layout>
  )
}

export default LearnPage

export const Head = () => <title><Trans>learn</Trans> </title>

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
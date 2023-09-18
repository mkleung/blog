import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"


const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">
        <Jumbotron />

        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="max-w-sm rounded overflow-hidden shadow-lg project">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">100 Days of CSS challenge</p>
              <p className="">
                I have completed the 100 days of css challenge as a creative learning process to polish my front end skills.
                <br /><br /><a href="https://codepen.io/mkleung" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">View Portfolio</a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#css</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#sass</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#html</span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg project">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <p className=" title font-bold text-xl mb-2">JW Foods</p>
              <p className="">
                JW foods is a sports nutrition company based in toronto
                <br /><br /><a href="" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">View Website</a>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#python</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#flask</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#nosql</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#React</span>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects </title>

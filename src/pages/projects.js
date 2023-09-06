import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'


import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const ProjectsPage = () => {
  return (
    <main className=" leading-normal tracking-normal text-gray-800">

      <Navbar />

      <div className="container max-w-2xl mx-auto py-8">

        <Jumbotron />

        <div className="container m-auto grid grid-cols-2 gap-2">

          <div class="max-w-sm rounded overflow-hidden shadow-lg project">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <p class=" title font-bold text-xl mb-2">100 Days of CSS challenge</p>
              <p class="text-gray-700 text-base">
                I have completed the 100 days of css challenge as a creative learning process to polish my front end skills.
                <br /><br /><a href="https://codepen.io/mkleung" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">View Portfolio</a>
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sass</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg project">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <p class=" title font-bold text-xl mb-2">JW Foods</p>
              <p class="text-gray-700 text-base">
                JW foods is a sports nutrition company based in toronto
                <br /><br /><a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" target="_blank">View Website</a>
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#python</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#flask</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nosql</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects </title>

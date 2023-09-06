import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../components/navbar"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const IndexPage = () => {
  return (
    <main className=" font-sans leading-normal tracking-normal text-gray-800">

      <Navbar />

      <div className="container max-w-2xl mx-auto  grid grid-cols-3 gap-4 mt-28">
        <div className="col-span-2	 ">
          <h1 className="mainTitle">Hello 👋 I'm Michael</h1>
          <h2 className="mt-2">Welcome to my internet island 🏝️</h2>
          <p className="py-4 text-gray-700 mt-10">
            I'm a software developer that moulds ideas into useful products. Based in Ottawa, I specialize in programming <span className="highlight">amazing websites</span>.
          </p>
        </div>
        <div className="	 ">
          <StaticImage src="../images/mike.JPG" placeholder="blurred"
            layout="fixed"
            height={100}
            className="mx-auto rounded-full mt-5" alt="developer" />
        </div>
      </div>

      <div className="container max-w-2xl mx-auto mt-20">
        <h2>Things I am familiar with</h2>
      </div>

      <div className="container max-w-2xl mx-auto py-5 skills grid grid-cols-2 gap-8">
        <div>
          <h2 className="font-bold	text-center	">Front End</h2>

          <div class="mb-1 text-lg font-medium dark:text-white">HTML</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="htmlbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">CSS / Bootstrap / Tailwind</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="cssbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">Javascript / ReactJS</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="javascriptbar bg-teal-300 h-4 rounded-full"></div>
          </div>

        </div>

        <div>
          <h2 className="font-bold	text-center	">Back End</h2>
          <div class="mb-1 text-lg font-medium dark:text-white">PHP / WordPress / Laravel</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="phpbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">Python/Flask</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="pythonbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">NodeJs</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="nodebar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>

        <div>
          <h2 className="font-bold	text-center	">Databases</h2>
          <div class="mb-1 text-lg font-medium dark:text-white">MySQL</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="mysqlbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">MongoDB</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="mongobar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">SQLite</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="sqlitebar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>

        <div>
          <h2 className="font-bold	text-center	">Mobile</h2>

          <div class="mb-1 text-lg font-medium dark:text-white">Android</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="androidbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">IOS</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="iosbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">React Native</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="reactbar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>



        <div>
          <h2 className="font-bold	text-center	">Data Science</h2>

          <div class="mb-1 text-lg font-medium dark:text-white">R</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="rbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">SAS</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="sasbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <div class="mb-1 text-lg font-medium dark:text-white">Tableau</div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="tableaubar bg-teal-300 h-4 rounded-full"></div>
          </div>
        
        </div>

      </div>


      <Footer />
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

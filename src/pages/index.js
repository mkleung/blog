import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
        
        <div className="frontend">
          <h2 className="font-bold	text-center	">Front End</h2>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">HTML</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
            <div className="firstbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">CSS / Bootstrap / Tailwind</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
            <div className="secondbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Javascript / ReactJS</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
            <div className="thirdbar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>

        <div className= "backend">
          <h2 className="font-bold	text-center	">Back End</h2>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">PHP / Laravel</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="firstbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Wordpress / LAMP</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="secondbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Python / Flask / Django</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="thirdbar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>


        <div className="datascience">
          <h2 className="font-bold	text-center	">Database and Datascience</h2>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Mysql / PosgreSQL</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="firstbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">SAS / R</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="secondbar bg-teal-300 h-4 rounded-full"></div>
          </div>

          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Nosql</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="thirdbar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>

        {/* Other */}
        <div className="other">
          <h2 className="font-bold	text-center	">Other</h2>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Photoshop / Illustrator</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="firstbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Git</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="secondbar bg-teal-300 h-4 rounded-full"></div>
          </div>
          <p class="mb-1 mt-1 text-lg font-medium dark:text-white">Vagrant / Docker / Virtualbox</p>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div className="thirdbar bg-teal-300 h-4 rounded-full"></div>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

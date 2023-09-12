import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
     
        <div className="container max-w-2xl mx-auto  grid grid-cols-3 p-4 gap-4 mt-28">
          <div className="col-span-2	 ">
            <h1 className="mainTitle">Hello 👋 I'm Michael</h1>
            <h2 className="mt-2">Welcome to my internet island 🏝️</h2>
            <p className="py-4 text-gray-700 mt-10">
              I'm a software developer that moulds ideas into useful amazing websites. I also help businesses built their <span className="highlight">online presence.</span>
            </p>
          </div>
          <div className="	 ">
            <StaticImage src="../images/mike.JPG" placeholder="blurred"
              layout="fixed"
              height={100}
              className="mx-auto rounded-full mt-5" alt="developer" />
          </div>
        </div>

        <div className="container max-w-2xl mx-auto mt-20 p-4">
          <h2>Things I am familiar with</h2>
        </div>

        <div className="progressbar container max-w-2xl mx-auto py-5 skills grid grid-cols-2 p-4 gap-8">

          <div className="frontend">
            <h2 className="font-bold	text-center	">Front End</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">HTML</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">CSS / Bootstrap / Tailwind</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Javascript / ReactJS</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>

          <div className="backend">
            <h2 className="font-bold	text-center	">Back End</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">PHP / Laravel</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Wordpress / LAMP</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Python / Flask / Django</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>


          <div className="datascience">
            <h2 className="font-bold	text-center	">Database and Datascience</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Mysql / PosgreSQL</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>

            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">SAS / R</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>

            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Nosql</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>

          {/* Other */}
          <div className="other">
            <h2 className="font-bold	text-center	">Other</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Photoshop / Illustrator</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar  h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Git</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Vagrant / Docker / Virtualbox</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>
        </div>
        
 
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Michael Leung - Home</title>

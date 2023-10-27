import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">

        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle"><Trans>about me</Trans></h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p className="py-4 text-gray-700">
              Hello I am Michael Leung. I'm a software developer based in Ottawa, Canada. This is a place where
              I share my projects, hobbies, learnings and thoughts to the world.
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

        <h2 className="font-bold	">Quick Facts</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li>I have a bachelors degree in science from Carleton University</li>
            <li>I was born and grew up on a tiny island south of India called Mauritius</li>
            <li>I am obsessed with all things technology</li>
          </ul>
        </p>

        <h2 className="font-bold	">Favorites</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li>Dish     : Biryani 🍛</li>
            <li>Sport    : Soccer </li>
            <li>Drink    : Mango Lassi</li>
            <li>Movie    : RRR </li>
            <li>Show     : Nathan for you</li>
          </ul>
        </p>

        <h2 className="font-bold	">Bucketlist</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li>Bikepacking and camping in the wilderness</li>
            <li>See the northern lights</li>
            <li>Visiting the seven moderns of the world like the Taj Mahal</li>
          </ul>
        </p>

        <h2 className="font-bold	">Software I love (that are also free)</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li><span className="font-bold">Coding: </span> <a target="_blank" href="https://code.visualstudio.com/"  className="text-blue-500 hover:underline mx-2">Visual Studio Code</a></li>
            <li><span className="font-bold">Design: </span> <a target="_blank" href="https://www.figma.com/" className="text-blue-500 hover:underline mx-2">Figma</a></li>
            <li><span className="font-bold">Notes: </span> <a target="_blank" href="https://obsidian.md/"  className="text-blue-500 hover:underline mx-2">Obsidian</a></li>
            <li><span className="font-bold">Gym: </span> <a target="_blank" href="https://www.liftinapp.co/"  className="text-blue-500 hover:underline mx-2">Liftin'</a></li>
            <li><span className="font-bold">VPN: </span> <a target="_blank" href="https://protonvpn.com" className="text-blue-500 hover:underline mx-2">ProtonVPN</a></li>
            <li><span className="font-bold">Biking: </span> <a target="_blank" href="https://www.bikemap.net/" className="text-blue-500 hover:underline mx-2">Bikemap</a></li>
            <li><span className="font-bold">Photography: </span> <a target="_blank" href="https://mylio.com" className="text-blue-500 hover:underline mx-2">Mylio</a></li>
            
          </ul>
        </p>

      </div>

      <div className="container max-w-2xl mx-auto  p-4">
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

export default AboutPage

export const Head = () => <title>About Page</title>

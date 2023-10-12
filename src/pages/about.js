import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"


const AboutPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">

        <Jumbotron />

        <div class="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold	test">About me</h2>
            <p className="py-4 text-gray-700">
              Hello I am Michael Leung. I'm a software developer based in Ottawa, Canada. This is a place where
              I share my projects, hobbies, learnings and thoughts to the world.
            </p>
          </div>
          <div className="flex justify-center items-right		">
            <StaticImage src="../images/about.JPG" placeholder="blurred"
              layout="fixed"
              height={150}
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

    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

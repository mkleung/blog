import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'

import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"


const AboutPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">

        <Jumbotron />

        <h2 className="font-bold	test">About me</h2>
        <p className="py-4 text-gray-700">
          Hello I am Michael Leung. I'm a software developer based in Ottawa, Canada. This is a place where
          I share my projects, hobbies, learnings and thoughts to the world.
        </p>

        <h2 className="font-bold	">Random Facts</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li>I have a bachelors degree in science from Carleton University</li>
            <li>I was born and grew up on a tiny island south of India called Mauritius</li>
            <li>My pastime since I was a teenager was watching bollywood movies and my favorite movie of all time is RRR</li>
          </ul>
        </p>

        <h2 className="font-bold	">Favorites</h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li>Ice-cream: Coconut</li>
            <li>Dish     : Biryani</li>
            <li>Sport   : Soccer</li>
          </ul>
        </p>

      </div>

    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

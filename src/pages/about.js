import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'

import Navbar from "../components/navbar"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <main className=" font-sans leading-normal tracking-normal text-gray-800">

      <Navbar />

      <div className="container max-w-2xl mx-auto ">

          <Jumbotron />
          
          <h1 className="font-bold	test">About me</h1>
          <p className="py-4 text-gray-700">
            Hello I am Michael Leung. I'm a software developer based in Ottawa, Canada. This ia a place where 
            I share my projects, hobbies, learnings and thoughts to the world. 
          </p>

          <h2 className="font-bold	">Random Facts</h2>
          <p className="py-4 text-gray-700 px-5">
            <ul className="list-disc">
              <li>I have a bachelors degree in science from Carleton University</li>
              <li>I was born and grew up on a tiny island near Africa called Mauritius</li>
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

      <Footer />
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

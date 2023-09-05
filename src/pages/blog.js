import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'


import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const BlogPage = () => {
  return (
    <main className=" leading-normal tracking-normal text-gray-800">

      <Navbar />

      <div className="container mx-auto py-8">
        <div className="mx-auto max-w-xl ">

          <Jumbotron />

          <p className="py-4 text-gray-700">
            This page is under construction
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default BlogPage

export const Head = () => <title>Blog</title>

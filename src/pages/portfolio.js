import * as React from "react"
import '../styles/global.css'

import { StaticImage } from "gatsby-plugin-image"


const PortfolioPage = () => {
  return (
    <main className="bg-white font-sans leading-normal tracking-normal text-gray-800">
    
      <div className="container mx-auto">
      <header className="px-5 py-4 flex justify-between items-center">
      <a href="/"><h1 className="text-2xl font-semibold">Michael Leung</h1></a>
        <nav className="flex">
          <a href="/blog" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Blog</a>
          <a href="/portfolio" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Portfolio</a>
          <a href="/contact" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Contact</a>
        </nav>
      </header>
    </div>

    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-sm ">

      <StaticImage src="../images/mike.JPG"   placeholder="blurred"
      layout="fixed"
      height={100}
      className="mx-auto rounded-full mb-5" alt="developer" />
        <div className="text-center">
          <a href="https://mikeleung.ca" class="text-teal-500 hover:text-teal-800 mx-2">Website</a>
          <a href="https://twitter.com/" class="text-teal-500 hover:text-teal-800 mx-2">Twitter</a>
          <a href="https://github.com/mkleung" class="text-teal-500 hover:text-teal-800 mx-2">Github</a>
        </div>
        <p className="py-4 text-gray-700">
            This page is under construction
        </p>
      </div>
    </div>
  </main>
  )
}

export default PortfolioPage

export const Head = () => <title>Portfolio </title>

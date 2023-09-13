/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Header from "./header"

import '../styles/global.css'
import '../styles/custom.css'


const Layout = ({  children }) => {
    return (
        <main className=" font-sans leading-normal tracking-normal text-gray-800">
      
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


function Footer() {
    return (
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="container mx-auto">
                {/* <StaticImage src="../images/mike.JPG" placeholder="blurred"
                    layout="fixed"
                    height={40}
                    className="mx-auto rounded-full mb-5" alt="developer" /> */}

                <div className="text-center mb-3">
                    <a target="_blank" href="https://github.com/mkleung" className="text-teal-500 hover:underline mx-3">Github</a>
                    <a target="_blank" href="https://www.instagram.com/morningmike/" className="text-teal-500 hover:underline mx-3">Instagram</a>
                    <a target="_blank" href="https://twitter.com/mikelottawa" className="text-teal-500 hover:underline mx-3">Twitter</a>
                </div>
                <div className="text-center mb-3">
                    <p className="mb-5 text-xs font-light">Made using Gatsby and hosted on github</p>
                </div>
                </div>


               
            </div>
        </footer>

    )
}

export default Footer
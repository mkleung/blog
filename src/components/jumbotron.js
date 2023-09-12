import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Jumbotron() {
    return (
        <div className="container mx-auto">

            <StaticImage src="../images/mike.JPG" placeholder="blurred"
                layout="fixed"
                height={40}
                className="mx-auto rounded-full mb-5" alt="developer" />

            <div className="text-center">
                <a target="_blank" href="https://github.com/mkleung" className="text-teal-500 hover:text-blue-500 mx-2">Github</a>
                <a target="_blank" href="https://www.instagram.com/morningmike/" className="text-teal-500 hover:text-blue-500 mx-2">Instagram</a>
                <a target="_blank" href="https://twitter.com/mikelottawa" className="text-teal-500 hover:text-blue-500 mx-2">Twitter</a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
        </div>
    )
}

export default Jumbotron
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
                <a href="https://mikeleung.ca" class="text-teal-500 hover:text-teal-800 mx-2">Website</a>
                <a href="https://twitter.com/" class="text-teal-500 hover:text-teal-800 mx-2">Twitter</a>
                <a href="https://github.com/mkleung" class="text-teal-500 hover:text-teal-800 mx-2">Github</a>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
        </div>
    )
}

export default Jumbotron
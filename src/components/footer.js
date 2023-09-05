import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
    return (
        <footer class="">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="grid v-screen place-items-center">
                    <div class="text-sm">
                        <p className="mb-5">Made using Gatsby </p>
                        <StaticImage src="../images/gatsby.PNG" placeholder="blurred"
                        layout="fixed"
                        height={20}
                        className="mx-auto rounded-full" alt="developer" /></div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
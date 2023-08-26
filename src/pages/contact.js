import * as React from "react"
import '../styles/global.css'

import { StaticImage } from "gatsby-plugin-image"


const ContactPage = () => {
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

                    <StaticImage src="../images/mike.JPG" placeholder="blurred"
                        layout="fixed"
                        height={100}
                        className="mx-auto rounded-full mb-5" alt="developer" />
                    <div className="text-center">
                        <a href="https://mikeleung.ca" class="text-teal-500 hover:text-teal-800 mx-2">Website</a>
                        <a href="https://twitter.com/" class="text-teal-500 hover:text-teal-800 mx-2">Twitter</a>
                        <a href="https://github.com/mkleung" class="text-teal-500 hover:text-teal-800 mx-2">Github</a>
                    </div>

                    <form method="POST" action="https://herotofu.com/start">
                        <label class="block mb-6">
                            <span class="text-gray-700">Your name</span>
                            <input
                                type="text"
                                name="name"
                                class="
                                    block
                                    w-full
                                    mt-1
                                    border-gray-300
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "/>
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700">Email address</span>
                            <input
                                name="email"
                                type="email"
                                class="
                                    block
                                    w-full
                                    mt-1
                                    border-gray-300
                                    rounded-md
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                "
                                placeholder=""
                                required
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                className="
                                        block
                                        w-full
                                        mt-1
                                        border-gray-300
                                        rounded-md
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-10
                                    "
                                rows="3"
                                placeholder="Tell us what you're thinking about..."
                            ></textarea>
                        </label>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          ">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

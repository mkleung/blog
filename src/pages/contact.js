import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'


import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"

const ContactPage = () => {
    return (
        <main className=" leading-normal tracking-normal text-gray-800">

            <Navbar />

            <div className="container mx-auto py-8">
                <div className="mx-auto max-w-xl ">

                    <Jumbotron />

                    <h1 className="mb-5">Contact me</h1>
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full md:w-1/2 px-3  md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Email
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="john@doe.com" />

                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" rows="5" placeholder="" ></textarea >

                            </div>
                        </div>

                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                                <button class="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

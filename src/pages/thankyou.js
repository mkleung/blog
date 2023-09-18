import * as React from "react"

import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"

const ContactPage = () => {
    
    return (
        <Layout>
           
            <div className="container max-w-2xl mx-auto p-4 py-8">

                <Jumbotron />

                <h1 className="mb-5">Thank you for reaching out to me. I am currently out of station right now and will get back to you.</h1>

            </div>

        </Layout>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

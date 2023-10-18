import * as React from "react"

import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"
import HeroContact from "../components/herocontact"

const ContactPage = () => {

    return (
        <Layout>

            <div className="container max-w-2xl mx-auto p-4 py-8">
                {/* <Jumbotron /> */}
                <h3 className=" mb-5 mainTitle">Contact me</h3>
                <HeroContact />
            </div>

        </Layout>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout"
import HeroContact from "../components/herocontact"

const ContactPage = () => {

    return (
        <Layout>

            <div className="container max-w-2xl mx-auto p-4 py-8">
                {/* <Jumbotron /> */}
                <h3 className=" mb-5 mainTitle"><Trans>Contact me</Trans></h3>
                <HeroContact />
            </div>

        </Layout>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>

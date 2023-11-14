import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

function Footer() {
    return (
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
 
                <div className="container mx-auto">
                <div className="text-center mb-3">
                    <a target="_blank" href="https://github.com/mkleung" className="text-teal-500 dark:text-red hover:underline mx-3">Github</a>
                    <a target="_blank" href="https://www.instagram.com/morningmike/" className="text-teal-500 hover:underline mx-3">Instagram</a>
                    <a target="_blank" href="https://twitter.com/mikelottawa" className="text-teal-500 hover:underline mx-3">Twitter</a>
                </div>
                <div className="text-center mb-3">
                    <p className="mb-5 text-xs font-light">
                        <Trans>Made using Gatsby</Trans>
                    </p>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
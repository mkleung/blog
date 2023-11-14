import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import background from "../images/ottawa.jpg";

const IndexPage = () => {
  const { t } = useTranslation();

 
  return (
    <Layout>

{/* <div
  class="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center h-96 		"
  style={{backgroundImage: `url(${background})` }}>
  <div
    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
    <div class="flex h-full items-center justify-center">
      <div class="text-white">
        <h2 class="mb-4 text-4xl font-semibold">Hi I'm Michael Leung</h2>
        <p className="mb-10 mt-10 text-white">
            <Trans>Im a software developer</Trans> <span className="highlight"><Trans>amazing websites</Trans>.</span>
          </p>
        <button
          type="button"
          class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Call to action
        </button>
      </div>
    </div>
  </div>
</div> */}




      <div className="container max-w-2xl mx-auto  grid grid-cols-3 p-4 gap-4 mt-28">
        <div className="col-span-2	 ">
          <h1 className="mainTitle"><Trans>Hi I'm Michael Leung</Trans></h1>
          <h2 className="mt-1"><Trans>Welcome to my website</Trans></h2>
          <p className="mb-10 mt-10 text-gray-700">
            <Trans>Im a software developer</Trans> <span className="highlight"><Trans>amazing websites</Trans>.</span>
          </p>
          <Link to="/about" className="transition-colors duration-300 ease-in-out bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            <Trans>about me</Trans>
          </Link>
        </div>
        <div className="	 ">
          <StaticImage src="../images/mike.JPG" placeholder="blurred"
            layout="fixed"
            height={100}
            className="mx-auto rounded-full mt-5" alt="developer" />
        </div>
      </div>



    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
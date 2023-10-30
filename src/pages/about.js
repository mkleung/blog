import * as React from "react"
import '../styles/global.css'
import '../styles/custom.css'
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from "../components/layout"
import { graphql } from 'gatsby';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container max-w-2xl mx-auto p-4 py-8">

        {/* <Jumbotron /> */}
        <h3 className=" mb-5 mainTitle">
        <Trans>about me</Trans>
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p className="py-4 text-gray-700">
              <Trans>about1</Trans>
            </p>
          </div>
          <div className="flex justify-center items-right		">
              <StaticImage src="../images/mike2.JPG" placeholder="blurred"
              layout="fixed"
              height={150}
              width={150}
              className="	mt-5 mb-2" alt="developer" />
          </div>
        </div>

        <h2 className="font-bold	"><Trans>about2</Trans></h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li><Trans>about3</Trans></li>
            <li><Trans>about4</Trans></li>
            <li><Trans>about5</Trans></li>
          </ul>
        </p>

        <h2 className="font-bold	"><Trans>about6</Trans></h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li><Trans>about7</Trans>     : Biryani 🍛</li>
            <li><Trans>about8</Trans>    : Soccer </li>
            <li><Trans>about9</Trans>    : Mango Lassi</li>
            <li><Trans>about10</Trans>    : RRR </li>
            <li><Trans>about11</Trans>     : Nathan for you</li>
          </ul>
        </p>

        <h2 className="font-bold	"><Trans>about12</Trans></h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li><Trans>about13</Trans></li>
            <li><Trans>about14</Trans></li>
            <li><Trans>about15</Trans></li>
          </ul>
        </p>

        <h2 className="font-bold	"><Trans>about16</Trans></h2>
        <p className="py-4 text-gray-700 px-5">
          <ul className="list-disc">
            <li><span className="font-bold">Coding: </span> <a target="_blank" href="https://code.visualstudio.com/"  className="text-blue-500 hover:underline mx-2">Visual Studio Code</a></li>
            <li><span className="font-bold">Design: </span> <a target="_blank" href="https://www.figma.com/" className="text-blue-500 hover:underline mx-2">Figma</a></li>
            <li><span className="font-bold">Notes: </span> <a target="_blank" href="https://obsidian.md/"  className="text-blue-500 hover:underline mx-2">Obsidian</a></li>
            <li><span className="font-bold">Gym: </span> <a target="_blank" href="https://www.liftinapp.co/"  className="text-blue-500 hover:underline mx-2">Liftin'</a></li>
            <li><span className="font-bold">VPN: </span> <a target="_blank" href="https://protonvpn.com" className="text-blue-500 hover:underline mx-2">ProtonVPN</a></li>
            <li><span className="font-bold">Biking: </span> <a target="_blank" href="https://www.bikemap.net/" className="text-blue-500 hover:underline mx-2">Bikemap</a></li>
            <li><span className="font-bold">Photography: </span> <a target="_blank" href="https://mylio.com" className="text-blue-500 hover:underline mx-2">Mylio</a></li>
            
          </ul>
        </p>

      </div>

      <div className="container max-w-2xl mx-auto  p-4">
          <h2><Trans>about17</Trans></h2>
        </div>

        <div className="progressbar container max-w-2xl mx-auto py-5 skills grid grid-cols-2 p-4 gap-8">

          <div className="frontend">
            <h2 className="font-bold	text-center	">Front End</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">HTML</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">CSS / Bootstrap / Tailwind</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Javascript / ReactJS</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-1 ">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>

          <div className="backend">
            <h2 className="font-bold	text-center	">Back End</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">PHP / Laravel</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Wordpress / LAMP</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Python / Flask / Django</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>


          <div className="datascience">
            <h2 className="font-bold	text-center	">Database and Datascience</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Mysql / PosgreSQL</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar h-4 rounded-full"></div>
            </div>

            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">SAS / R</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>

            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Nosql</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>

          {/* Other */}
          <div className="other">
            <h2 className="font-bold	text-center	">Other</h2>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Photoshop / Illustrator</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar firstbar  h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Git</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar secondbar h-4 rounded-full"></div>
            </div>
            <p className="mb-1 mt-1 text-lg font-medium dark:text-white">Vagrant / Docker / Virtualbox</p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className="bar thirdbar h-4 rounded-full"></div>
            </div>
          </div>
        </div>

    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

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
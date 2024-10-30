import * as React from "react"
import { useState } from "react"
import Dark from "./dark"
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation, useI18next, I18nextContext } from 'gatsby-plugin-react-i18next';


const Header = ({ siteTitle, navLocation }) => {


    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    // const { languages, originalPath } = useI18next();
    // const { t } = useTranslation();

    const { languages, changeLanguage } = useI18next();
    const context = React.useContext(I18nextContext);


    return (
        <div className=" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4">
            <Link to="/"><h1 className="text-2xl font-semibold	"></h1></Link>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)} >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-4 py-4"
                            onClick={() => setIsNavOpen(false)}>
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className=" flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link to="/about"><Trans>about</Trans></Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link to="/portfolio"><Trans>portfolio</Trans></Link>
                            </li>

                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link to="/contact"><Trans>contact</Trans></Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="navbar hidden font-medium space-x-8 lg:flex">
                    <li>
                        <Link to="/" activeClassName="active" className="block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out">
                            <Trans>home</Trans>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active" className="block  py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out">
                            <Trans>about</Trans>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" activeClassName="active" className="block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out">
                            <Trans>portfolio</Trans>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active" className="block  py-2  text-gray-900  md:p-0 hover:text-teal-500 transition-colors duration-300 ease-in-out">
                            <Trans>contact</Trans>
                        </Link>
                    </li>

                    {context.language == "fr" ?
                        <li key="en">
                            <a
                                className="language-switcher"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("en");
                                }}>
                                EN
                            </a>
                        </li>
                        :
                        <li key="en">
                            <a
                                className="language-switcher "
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage("fr");
                                }}>
                                FR
                            </a>
                        </li>
                    }

                    <li className="darkCheckContainer">
                        <Dark />
                    </li>



                </ul>


            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    )
}
export default Header

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
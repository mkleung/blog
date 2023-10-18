import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Dark from "./dark"

const Header = ({ siteTitle, navLocation }) => {


    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <div className=" max-w-screen-xl flex items-center justify-between  py-4  mx-auto p-4">
            <Link to="/"><h1 className="text-2xl font-semibold	">Michael Leung</h1></Link>

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
                                <Link to="/about">About</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="navbar hidden font-medium space-x-8 lg:flex">
                    <li>
                        <Link to="/about" activeClassName="active" className="block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 ">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" activeClassName="active" className="block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 ">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active" className="block py-2 pl-3 pr-4 text-gray-900  md:p-0 hover:text-teal-500 ">Contact</Link>
                    </li>
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
import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

function Navbar() {
  return (
    <div className="container mx-auto">
      <header className="px-5 py-4 flex justify-between items-center">
        <a href="/"><h1 className="text-2xl font-semibold">Michael Leung</h1></a>
        <nav className="flex">
          <a href="/about" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">About</a>
          {/* <a href="/blog" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Blog</a> */}
          <a href="/projects" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Projects</a>
          <a href="/contact" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Contact</a>
          
          <div className="darkToggle mt-1">
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label >
                  <input
                    id="darkCheck"
                    type="checkbox"

                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  /><span className="moonToggle">🌙</span>

                </label>
              )}
            </ThemeToggler>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
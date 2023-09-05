import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }  
  }, [isDark])


  function sayHello() {
    alert('Hello!');
  }

  return (
    <div className="container mx-auto">
      <header className="px-5 py-4 flex justify-between items-center">
        <a href="/"><h1 className="text-2xl font-semibold">Michael Leung</h1></a>
        <nav className="flex">
          <a href="/blog" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Blog</a>
          <a href="/projects" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Projects</a>
          <a href="/contact" className="block px-3 py-2 rounded-lg text-teal-500 hover:bg-teal-400 hover:text-white">Contact</a>
          <span>
       
        {isDark ? 
          (<button  className="mt-2 mx-2" onClick={() => setIsDark(!isDark)}   alt="sun img">🌙</button>) :
          (<button  className="mt-2 mx-2" onClick={() => setIsDark(!isDark)} alt="moon img">🌕</button>)}
      </span>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
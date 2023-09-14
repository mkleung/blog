import React from "react"
import Sun from "../images/sun.png"
import Moon from "../images/moon.png"

export default function DarkMode() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }  
  }, [isDark])

  return (
    <div className="global-toggle-switch">
      <span>
        {isDark ? (<img onClick={() => setIsDark(!isDark)} src={Sun} alt="sun img" />) : (<img onClick={() => setIsDark(!isDark)} src={Moon} alt="moon img" />)}
      </span>
    </div>
  )
}
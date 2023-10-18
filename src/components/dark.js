import React from "react"
import Sun from "../images/sun.png"
import Moon from "../images/moon.png"

function getDefaultTheme() {
    if (typeof window != "undefined") {
        const savedTheme = window.localStorage.getItem("theme")
        return savedTheme ? savedTheme : "light"
    }

}

export default function DarkMode() {
    const [isDark, setIsDark] = React.useState(getDefaultTheme())

    React.useEffect(() => {
        if (isDark === "dark") {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
        window.localStorage.setItem("theme", isDark)
    }, [isDark])

    return (
        <div className="global-toggle-switch">
            <span onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}>
                {isDark === "dark" ? (
                   <span>☀️</span>
                ) : (
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="fade-in text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path></svg>
                )}
            </span>
        </div>
    )
}
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
                    <img src={Sun} alt="sun img" />
                ) : (
                    <img src={Moon} alt="moon img" />
                )}
            </span>
        </div>
    )
}
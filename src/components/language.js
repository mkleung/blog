import React from "react"


export default function LanguageMode() {
    const [language, setLanguage] = React.useState("En")

    React.useEffect(() => {
        if (language === "En") {
           
        } else {
           
        }
        window.localStorage.setItem("language", language)
    }, [language])

    return (
        <div className="global-toggle-switch">
            <span onClick={() => setLanguage(language === "En" ? "light" : "dark")}>
                {language === "dark" ? (
                   <span>En</span>
                ) : (
                   <span>Fr</span>
                )}
            </span>
            {language}
        </div>
    )
}
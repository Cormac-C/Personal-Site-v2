import * as React from "react"
import NavBar from "../components/navbar"

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const AboutPage = () => {
    return (
      <main style={pageStyles}>
        <title>About | Cormac</title>
        <NavBar/>
        <h1 style={headingStyles}>
          This is an about page!
        </h1>
      </main>
    )
  }
  
  export default AboutPage
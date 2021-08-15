import * as React from "react"
import NavBar from "../components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

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

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home | Cormac</title>
      <NavBar/>
      <h1 style={headingStyles}>
        This is the home page!
      </h1>
    </main>
  )
}

export default IndexPage

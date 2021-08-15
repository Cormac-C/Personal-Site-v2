import * as React from "react"

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

const ContactPage = () => {
    return (
      <main style={pageStyles}>
        <title>Contact | Cormac</title>
        <h1 style={headingStyles}>
          This is an contact page!
        </h1>
      </main>
    )
  }
  
  export default ContactPage
import * as React from "react"
import Search from "../components/search.js";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 350,
  fontSize: 42,
}
const headingAccentStyles = {
  color: "#663399",
  fontSize: 25
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Weather. Simple.
        <br />
        <span style={headingAccentStyles}>Just enter your location and discover the weather conditions for your current location.</span>
      </h1>
      <Search />
    </main>
  )
}

export default IndexPage

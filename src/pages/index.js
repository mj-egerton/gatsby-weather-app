import * as React from "react"
import Search from "../components/search.js";
import Display from "../components/display.js";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start"

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
  const [weatherData, setWeatherData] = React.useState({});
  
  const handleWeatherData = (data) => {
    setWeatherData(data)
  }
  return (
    <main style={pageStyles}>
      <div>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          Weather. Simple.
          <br />
          <span style={headingAccentStyles}>Just enter your location and discover the weather conditions for your current location.</span>
        </h1>
        <Search parentCallback={handleWeatherData}/>
      </div>
      <div>
        <Display weatherData={weatherData} />
      </div>
    </main>
  )
}

export default IndexPage

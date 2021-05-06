import * as React from "react"
import axios from "axios"

const Search = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherForCurrentLoc(searchValue);
  }

  const getWeatherForCurrentLoc = async (searchValue) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=08bb2048fcabafff1dc7b2a8d93668ef`)
      props.parentCallback(response.data)
    } 
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <label for="location-search"></label>
        <input type="search" id="location-search" name="location"
            aria-label="Search weather conditions by location" placeholder="e.g. Manchester, London..."
            onChange={handleChange} value={searchValue} />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Search

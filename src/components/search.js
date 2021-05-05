import * as React from "react"

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
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

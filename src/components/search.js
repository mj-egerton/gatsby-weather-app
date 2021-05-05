import * as React from "react"

const Search = () => {
  return (
    <div>
        <label for="location-search"></label>
        <input type="search" id="location-search" name="location"
            aria-label="Search weather conditions by location" />
        <button>Search</button>
    </div>
  )
}

export default Search

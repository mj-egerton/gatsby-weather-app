import * as React from "react"
import emojiLookUp from "../helpers/emojiLookUp.js"

const resultStyles = {
    marginLeft: 96,
    paddingLeft: 96,
    paddingRight: 96,
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    textAlign: "center",
}

const emojiStyles = {
    fontSize: 120,
    padding: 0,
    margin: 0,
}

const resultAccentStyles = {
    color: "#663399",
    fontSize: 25,
    paddingBottom: 20
  }

const Display = (props) => {
    return (
        <div>
            {
                props.weatherData.weather ? props.weatherData.weather.map((w, index) => {
                    return (
                        <div key={index}>
                            <div className="details" style={resultStyles}>
                                <p style={emojiStyles}>{emojiLookUp[w.main]}</p>
                                <p style={resultAccentStyles}>{w.description}</p>
                            </div>
                        </div>
                    );
                }) : null
            }
        </div>
    )
}

export default Display

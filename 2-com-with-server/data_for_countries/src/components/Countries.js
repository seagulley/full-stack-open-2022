import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
    console.log('country', country)
    const api_key = process.env.REACT_APP_API_KEY
    console.log('api_key', api_key)
    const [lat, lng] = country.latlng
    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
            .then(response =>
                console.log('response', response)
            )
    })
}

const DisplayCountries = ({ countryData, newFilter }) => {  
    const [viewCountry, setViewCountry] = useState({})
    const filteredCountries = countryData.filter(country => 
        country.name.common.toLowerCase().includes(newFilter.toLowerCase()) 
    )
    
    const CountryPage = () => {       
        return (
            <>
                <h2>{viewCountry.name.common}</h2>
                <div>
                    <p>capital {viewCountry.capital}</p>
                    <p>area {viewCountry.area}</p>
                </div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(viewCountry.languages)
                        .map(language => 
                            <li key={language}>{language}</li>
                        )}
                </ul>
                <img src={viewCountry.flags.png} />
                <Weather country={viewCountry} />
            </>
        )
    }

    if (Object.keys(viewCountry).length !== 0) {
        return CountryPage(viewCountry)
    }

    const handleClick = (country) => {
        setViewCountry(country)
    }

    if (newFilter === '') {
        return
    } 

    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (filteredCountries.length <= 10) {
        return filteredCountries.map(country =>
            <div key={country.name.common}>
                {country.name.common} 
                <button onClick={() => {
                    handleClick(country)}}> 
                    show
                </button>
            </div> 
        )
    }
    if (filteredCountries.length === 1) {
        setViewCountry(filteredCountries[0])
    }
}

export default DisplayCountries
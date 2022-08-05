const DisplayCountries = ({ countryData, newFilter }) => {
    const filteredCountries = countryData.filter(country => 
        country.name.common.toLowerCase().includes(newFilter.toLowerCase()) 
    )
    if (newFilter === '') {
        return
    }
    if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        return (
            <>
                <h2>{country.name.common}</h2>
                <div>
                    <p>capital {country.capital}</p>
                    <p>area {country.area}</p>
                </div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages)
                        .map(language => 
                            <li key={language}>{language}</li>
                        )}
                </ul>
                <img src={country.flags.png} />
            </>
        
        )
    }
    if (filteredCountries.length <= 10) {
        return filteredCountries.map(country =>
            <p key={country.name.common} >{country.name.common}</p>
        )
    }
    return <p>Too many matches, specify another filter</p>

    
}

export default DisplayCountries
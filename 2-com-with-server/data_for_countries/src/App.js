import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import DisplayCountries from './components/Countries'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countryData, setCountryData] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  return (
    <>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <DisplayCountries countryData={countryData} newFilter={newFilter} />
    </>
  )
}

export default App
import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  let countries = []
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        countries = response.data.map(country => country.name.common)
      })
  }, [])

  return (
    <>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
    </>
  )
}

export default App
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  })

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const allStates = [
    newName, 
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons
  ]

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm states={allStates} />
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} newFilter={newFilter} />
      </div>
    </div>
  )
}

export default App
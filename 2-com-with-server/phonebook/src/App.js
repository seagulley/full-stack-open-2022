import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    numberService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])  // empty array as second parameter means that the effect is 
          // only run along with the first render

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
        <Persons persons={persons} setPersons={setPersons} newFilter={newFilter} />
      </div>
    </div>
  )
}

export default App
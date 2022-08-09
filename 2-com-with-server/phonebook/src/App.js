import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/Numbers'
import Notification from './components/Notification'
import ErrorNotif from './components/ErrorNotif'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [errMessage, setErrMessage] = useState(null)

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
    newFilter,
    setNewFilter,
    persons,
    setPersons,
    setMessage,
    setErrMessage
  ]

  return (
    <div>
      <Notification message={message} />
      <ErrorNotif message={errMessage} />
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm states={allStates} />
      <h2>Numbers</h2>
      <div>
        <Persons states={allStates} />
      </div>
    </div>
  )
}

export default App
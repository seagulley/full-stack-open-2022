import numberService from '../services/Numbers'

const Name = ({newName, setNewName}) => {
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    return (
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
    )
}

const Number = ({newNumber, setNewNumber}) => {
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
    return (
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
    )
}

const PersonForm = ({states}) => {
    const [newName, setNewName, 
      newNumber, setNewNumber, 
      newFilter, setNewFilter,
      persons, setPersons,
      setMessage, setErrMessage] = states
    
    const updateNumber = updatePerson => {
      const id = updatePerson.id
      updatePerson.number = newNumber

      numberService
        .update(id, updatePerson)
        .then(() => {
          setPersons(persons.map(person => person.id === id ? person = updatePerson : person))
          setMessage(
            `Added${updatePerson.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(err => {
          setErrMessage(
            `Information of ${persons.find(person => person.id === id).name} has already been removed from server`
          )
          setTimeout(() => {
            setErrMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
    
    const addPerson = (event) => {
      event.preventDefault()
      const nameMatch = persons.find(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())
      if (nameMatch) {
        let person = nameMatch
        if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
          updateNumber(person)
        }
        setNewName('')
        setNewNumber('')
        return
      }
      
      const person = {
        name: newName,
        number: newNumber,
      }

      numberService
        .create(person)
        .then(response => {
          setPersons(persons.concat(person))
          setMessage(
            `Added ${person.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })

      // update persons to include the generated id
      numberService
        .getAll()
        .then(response => {
          setPersons(response.data)
        })
    }
    return (
      <form onSubmit={addPerson}>
          <Name newName={newName} setNewName={setNewName} />
          <Number newNumber={newNumber} setNewNumber={setNewNumber}/>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm
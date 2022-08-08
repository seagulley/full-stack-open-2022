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
    const [newName, setNewName, newNumber, setNewNumber, persons, setPersons] = states
    const addPerson = (event) => {
      event.preventDefault()
      if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
        alert(`${newName} is already added to phonebook`)
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
          setNewName('')
          setNewNumber('')
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
import numberService from '../services/Numbers'

const Persons = ({states}) => {
  const [newName, setNewName, 
    newNumber, setNewNumber, 
    newFilter, setNewFilter,
    persons, setPersons,
    setMessage, setErrMessage] = states

  const checkFilter = (person) => person.name.toLowerCase().includes(newFilter.toLowerCase())
    
  const deletePerson = id => {

    numberService
      .deleteNumber(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
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


  const handleButtonClick = (event) => {  
    numberService
      .getAll()
      .then(response => {
        const person = response.data.find(person => person.name === event.target.value)
        if (!window.confirm(`Delete ${person.name}?`)) {
          return
        }
        deletePerson(person.id)
      })
  }
  
  return (
    <div>
        {persons.filter(checkFilter).map(person => 
        <div key={person.name}>
          <p>{person.name} {person.number} <button value={person.name} onClick={handleButtonClick}>delete</button></p>
      </div>
        )}
      </div>
  )
}

export default Persons
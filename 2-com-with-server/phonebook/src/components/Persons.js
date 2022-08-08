import numberService from '../services/Numbers'

const Persons = ({persons, setPersons, newFilter}) => {
    const checkFilter = (person) => person.name.toLowerCase().includes(newFilter.toLowerCase())
    
    const deletePerson = id => {
      const person = persons.find(person => person.id === id)
      const changedPersons = persons.filter(person => person.id !== id)

      numberService
        .deleteNumber(id)
        .then(
          setPersons(changedPersons)
        )
        .catch(error => {
          alert(
            `${person} was already deleted from the server`
          )
          setPersons(changedPersons)
        })
    }


    const handleButtonClick = (event) => {  
      const person = persons.find(person => person.name ===event.target.value)
      console.log('person', person)
      if (!window.confirm(`Delete ${person.name}?`)) {
        return
      }
      deletePerson(person.id)
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
const Persons = ({persons, newFilter}) => {
    const checkFilter = (person) => person.name.toLowerCase().includes(newFilter.toLowerCase())
    const handleButtonClick = (event) => {
      console.log(event)
    }
    
    return (
      <div>
          {persons.filter(checkFilter).map(person => 
          <div key={person.name}>
            <p>{person.name} {person.number} <button onClick={handleButtonClick}>delete</button></p>
        </div>
          )}
        </div>
    )
}

export default Persons
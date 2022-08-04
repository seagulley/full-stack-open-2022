const Persons = ({persons, newFilter}) => {
    const checkFilter = (person) => person.name.toLowerCase().includes(newFilter.toLowerCase())
    return (
      <div>
          {persons.filter(checkFilter).map(person => 
          <p key={person.name}>{person.name} {person.number}</p>
          )}
        </div>
    )
}

export default Persons
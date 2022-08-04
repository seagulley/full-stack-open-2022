const Filter = (props) => {
    const {newFilter, setNewFilter} = props
    const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
    }
    return (
      <div>
          filter shown with <input value={newFilter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter
const Total = ({parts}) => {    
   const exercises = parts.map(part => part.exercises)
    
    return (
        <p>Number of exercises {exercises.reduce((previous, current) => previous + current)} </p>
    )
}

export default Total
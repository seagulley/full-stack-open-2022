const Total = ({parts}) => {
    console.log('partss:', parts);
    
    const [ part1, part2, part3 ] = parts
    console.log('part1:', part1);
    console.log('part1 exercises', part1.exercises);
    const total = part1.exercises + part2.exercises + part3.exercises
    
    return (
        <p>Number of exercises {total} </p>
    )
}
export default Total
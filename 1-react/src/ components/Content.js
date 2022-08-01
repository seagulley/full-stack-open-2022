const Part = ({ part }) => {
    const {name, exercises} = part
    return (
        <p>{name} {exercises}</p>
    )
}


const Content = ({ parts }) => {
    const [ part1, part2, part3 ] = parts    
    return (
        <div>
            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} />
        </div>
    )
}

export default Content
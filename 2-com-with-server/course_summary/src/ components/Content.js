const Part = ({ part }) => {
    const {name, exercises} = part
    return (
        <p key={part.id}>{name} {exercises}</p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => 
                <Part part={part} />
            )}
        </div>
    )
}

export default Content
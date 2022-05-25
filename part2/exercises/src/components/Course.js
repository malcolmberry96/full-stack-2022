const Course = (props) => {
    const { course } = props

    return (
        <li>{course.name}</li>
    )
}

export default Course;
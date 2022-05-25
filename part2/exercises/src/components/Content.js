const Course = (props) => {
    const { course } = props

    return (
        <li>{course.excercises}</li>
    )
}

export default Course;
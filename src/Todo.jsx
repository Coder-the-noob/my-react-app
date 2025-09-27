export default function ToDo({task, isDone}) {
    return (
        <li>Sonar Bangladesh: {task} Status: {isDone ? "Student" : "Not Student"}</li>
    )
}
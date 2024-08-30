
function Todo({ todo: {id, title, completed} }) {
  return (
    <div className={completed ? "todo" : "doneTodo"} key={id}>
        <h3>{title}</h3>
    </div>
  )
}

export default Todo
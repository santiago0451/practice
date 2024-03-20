import { useState } from "react"
import '../styles/11.todo-list-strings.scss'

export function TodoListStrings() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const [savedInputValue, setSavedInputValue] = useState('')

  const addButtonLogic = (event) => {
    event.preventDefault()
    setTodoList([...todoList, inputValue])
    setInputValue('')
  }

  const updateButtonLogic = (event) => {
    event.preventDefault()
    const newTodoEditedList = todoList.map((newEditedTodo) => {
      if (newEditedTodo == inputValue) {
        return inputValue
      }
      return newEditedTodo
    })
    setTodoList(newTodoEditedList)
    setInputValue('')
  }

  return (
    <main>
      <form className="form-container">
        <input
          placeholder="Lavar la ropa..."
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          value={inputValue}
        />
        <button
          onClick={addButtonLogic}
        >Add</button>
        <button
          onClick={updateButtonLogic}
        >Edit</button>
      </form>
      <section>
        <ul className="list-container">
          {todoList.map((todo) => {
            return <div key={todo} className="item-list-container">
              <li>{todo}</li>
              <button
                onClick={() => {
                  const newTodoList = todoList.filter((newTodo) => {
                    return newTodo != todo
                  })
                  setTodoList(newTodoList)
                }}
              >Delete</button>
              <button
                onClick={() => {
                  setInputValue(todo)
                }}
              >Edit</button>
            </div>
          })}
        </ul>
      </section>
    </main>
  )
}

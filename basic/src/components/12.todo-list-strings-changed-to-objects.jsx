import { useState } from "react";
import '../styles/12.todo-app.scss'

export function TodoList() {
  const [inputValue, setInputValue] = useState({ id: '', text: '' })
  const [todoList, setTodoList] = useState([])

  const addButton = (event) => {
    event.preventDefault()
    setTodoList([...todoList, { id: self.crypto.randomUUID(), text: inputValue.text }])
    setInputValue({ id: '', text: '' })
  }
  const editButton = (event) => {
    event.preventDefault()
    const newEditedList = todoList.map((todo) => {
      if (todo.id === inputValue.id) {
        return { id: inputValue.id, text: inputValue.text }
      }
      return todo
    })
    setTodoList(newEditedList)
    setInputValue({ id: '', text: '' })
  }

  return (
    <>
      <header>
        <h1>Do I have a ToDo pending?</h1>
      </header>
      <main>
        <form>
          <input
            onChange={(event) => {
              setInputValue({ ...inputValue, text: event.target.value })
            }}
            value={inputValue.text}
          />
          <button
            onClick={addButton}
          >
            Add
          </button>
          <button
            onClick={editButton}
          >
            Edit
          </button>
        </form>
        <section>
          <ul>
            {todoList.map((todo) => {
              return <div key={todo.id}>
                <li>{todo.text}</li>
                <button
                  onClick={() => {
                    const id = todo.id
                    const newTodoList = todoList.filter((newTodo) => {
                      return newTodo.id != id
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
    </>
  )
}

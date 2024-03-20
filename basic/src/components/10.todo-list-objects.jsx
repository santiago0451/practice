import { useState } from "react";
import '../styles/10.todo-list-objects.scss'

export function TodoListObjects() {
  const [inputValue, setInputValue] = useState({ id: '', text: '' })
  const [list, setList] = useState([])

  const handleAddClick = (event) => {
    event.preventDefault()
    setList([...list, { id: self.crypto.randomUUID(), text: inputValue.text }])
    setInputValue({ id: '', text: '' })
  }

  const handleEditClick = (event) => {
    event.preventDefault()
    const newList = list.map((item) => {
      if (item.id == inputValue.id) {
        return { id: inputValue.id, text: inputValue.text }
      }
      return item
    })
    setList(newList)
    setInputValue({ id: '', text: '' })
  }

  return (
    <main>
      <form className="form-container">
        <input
          placeholder='Ir a comprar el mercado...'
          onChange={(event) => {
            setInputValue({ ...inputValue, text: event.target.value })
          }}
          value={inputValue.text}
        />
        {inputValue.id ? <button onClick={handleEditClick}>Edit</button> : <button onClick={handleAddClick}>Add</button>}
      </form>
      <div>
        <ul className="list-container">{list.map((item) => {
          return <div key={item.id} className="item-list-container">
            <li><h1>{item.text}</h1></li>
            <button
              onClick={() => {
                const id = item.id
                const newList = list.filter((newItem) => { return newItem.id != id })
                setList(newList)
              }}
            >Delete</button>
            <button
              onClick={() => {
                setInputValue(item)
              }}
            >Edit</button>
          </div>
        })}</ul>
      </div>
    </main>
  )
}

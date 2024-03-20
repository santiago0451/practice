import { useState } from "react";

export function FormList() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])

  const handleClick = (event) => {
    event.preventDefault()
    setList([...list, inputValue])
    setInputValue('')
  }

  return (
    <main>
      <form>
        <input
          placeholder='Hacer la tarea...'
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          value={inputValue}
        />
        <button onClick={handleClick}>Add</button>
      </form>
      <div>
        <ul>
          {list.map((item) => {return <li key={item}>{item}</li>})}
        </ul>
      </div>
    </main>
  )
}

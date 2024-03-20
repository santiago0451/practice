import { useState } from "react";

export function Form() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  return (
    <form>
      <input 
        onChange={(event) => {
          setName(event.target.value)
        }}
        placeholder='Nombre...'
      />
        <br />
      <input 
        onChange={(event) => {
          setDescription(event.target.value)
        }}
        placeholder='Descripción...'
      />
        <br />
      <button
        type="submit"
        onClick={
          () => {alert(
            `Este es el nombre: ${name}
            Esta es la descripción: ${description}`
            )}
        }
      >Submit</button>
    </form>
  )
}

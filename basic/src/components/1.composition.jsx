export function Composition() {
  return (
    <main>
      <Numbers />
      <Button />
    </main>
  )
}

function Numbers() {
  return (
    <p>Hola, aprieta el botón para saber cuánto es 2 + 2 (el botón no sirve para nada)</p>
  )
}

function Button() {
  return (
    <button>Soy un botón</button>
  )
}
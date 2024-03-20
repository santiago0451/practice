import { useState } from "react"

export function State() {
  const [count, setCount] = useState(3)

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>
        2 + 2 = {count}
      </button>
    </main>
  )
}

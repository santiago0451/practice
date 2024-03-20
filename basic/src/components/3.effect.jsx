import { useEffect, useState } from "react";

export function Effect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`
  }, [count])

  return (
    <div>
      <span>El contador está a {count}</span>
      <br/>
      <button onClick={() => setCount(count + 1)}> 
        Incrementar contador
      </button>
    </div>
  )
}

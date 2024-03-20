import { useEffect, useState } from "react";

export function FetchAsyncAwait2() {
  const [apiData, setApiData] = useState({})
  
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/35')
        const data = await response.json()
        setApiData(data)
      } catch (error) {
        console.error(error)
      }
    }  
    apiCall()
  }, [])

  return (
    <main>
      <h1>{apiData.name}</h1>
    </main>
  )
}

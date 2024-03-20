import { useEffect, useState } from "react";

export function FetchAsyncAwait() {
  const [apiData, setApiData] = useState({})
  
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
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
      <p>{apiData.text}</p>
    </main>
  )
}

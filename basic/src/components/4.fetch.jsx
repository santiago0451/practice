import { useEffect, useState } from "react";

export function Fetch() {
  const apiKey = 'f8pSnjILr45QAtGqO7uzRozvhXg0PxfUf8jgpu2m'
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  const [apiData, setApiData] = useState({})

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error(error))
  }, [])
  
  return (
    <main>
      <h1>{apiData.title}</h1>
      <h2>{apiData.date}</h2>
      <img src={apiData.hdurl} alt="" />
      <h3>{apiData.copyright }</h3>
      <p>{apiData.explanation}</p>
    </main>
  )
}

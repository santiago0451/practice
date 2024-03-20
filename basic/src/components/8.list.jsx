export function List() {
  const list = [1, 2, 3, 4, 5, 6]

  return (
    <ul>{list.map((item) => {return <li>{item}</li>})}</ul>
  )
}

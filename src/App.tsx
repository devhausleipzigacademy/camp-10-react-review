// Topics
// - Components ✅
// - TypeScript ✅
//    - Generics ✅
// - Tailwind ✅
// - Smart vs dumb components ✅
// - Lifting state up ✅
// - Unidirectional data flow ✅
// - Async await

import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { Button } from "./components/Button"
import { Counter } from "./components/Counter"

function App() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [countThree, setCountThree] = useState(0)

  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  async function getTodos() {
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    try {
      setError("")
      setIsLoading(true)
      const todos: Todo[] = await axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.data)
      setTodos(todos)
      setIsLoading(false)
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.toString())
      }
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      {/* <span>Home</span>
      <Button onClick={() => alert("clicked")} id="btn">
        <div className="flex gap-2">
          <span>🔥</span>
          <span>My Button</span>
        </div>
      </Button>
      <Button onClick={() => alert("clicked 2")} id="btn">
        Button 2
      </Button>
      <Button
        onClick={() => alert("clicked 3")}
        id="btn"
        className="bg-red-800 px-2 py-1"
      >
        Button 3
      </Button>
      <div className="flex flex-col gap-4">
        <Counter count={countOne} updateCount={setCountOne} />
        <Counter count={countTwo} updateCount={setCountTwo} />
        <Counter count={countThree} updateCount={setCountThree} />
      </div> */}
    </div>
  )
}

export default App

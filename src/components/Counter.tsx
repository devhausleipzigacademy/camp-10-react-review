import { Button } from "./Button"

type Props = {
  count: number
  updateCount: (num: number) => void
}

export function Counter({ count, updateCount }: Props) {
  function increment() {
    updateCount(count + 1)
  }

  function decrement() {
    updateCount(count - 1)
  }

  return (
    <div className="p-4 border-4">
      <span>{count}</span>
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  )
}

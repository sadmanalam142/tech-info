
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {

  const count = useAppSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="flex gap-5 items-center justify-center mt-40">
        <button
        className="border bg-blue-500 text-white p-2 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
        className="border bg-blue-500 text-white p-2 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
        <div>{count}</div>
        <button
        className="border bg-blue-500 text-white p-2 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App

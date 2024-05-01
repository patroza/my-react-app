import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Schema from "@effect/schema/Schema"
import * as Effect from "effect/Effect"

// const s = Schema.String
// //const a = Schema.decode(s)("hello").pipe(Effect.runSync)
// const a = Schema.decodeSync(s)("hello")
const a = Effect.sync(() => "hello").pipe(Effect.runSync)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {a}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

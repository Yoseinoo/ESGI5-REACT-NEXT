// app/counter/Counter.tsx
'use client'

import { useState } from 'react'

export default function Counter({ initialValue }: { initialValue: number }) {
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

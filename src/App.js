import React, { useState } from 'react';

const App = () => {
  const defaultValue = 0
  const [count, setCount] = useState(defaultValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const double = () => setCount(count * 2)
  const reset = () => setCount(defaultValue)

  const divide3 = () => {
    setCount(count % 3 === 0 ? count / 3 : count)
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={double}>*2</button>
        <button onClick={divide3}>3で割る</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App;

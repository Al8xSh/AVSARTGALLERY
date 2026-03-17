import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const counterFunction = () => {
    setCount(count + 1);
  }

  const resetCounter = () => {
    setCount(0);
  }

  return (
    <React.Fragment>
      <body className='backgroundImage'>
        <div className='buttonByCenterOfScreen'>
          <button
            className="buttonStyle"
            onClick={counterFunction}
          >
            Count is {count}
          </button>
          <button
            className="buttonStyle"
            onClick={resetCounter}
          >
            ⟳
          </button>
        </div>
      </body>
    </React.Fragment>
  )
}

export default App

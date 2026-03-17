import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const counterFunction = () => {
    setCount((count) => count + 1);
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
        </div>
      </body>
    </React.Fragment>
  )
}

export default App

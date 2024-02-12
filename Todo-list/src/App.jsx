import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])
  return (
    <div>
      <h1>Window Size</h1>
      {windowSize.width} x {windowSize.height}
    </div>
  )

  // const [newItem, setNewItem] = useState([])
  // return (
  //   <>
  //     <div>
  //       <form className="new-item-form">
  //         <div className="form-row">
  //           <label htmlFor="item">New Item</label>
  //           <input
  //             value={newItem}
  //             onChange={(e) => setNewItem(e.target.value)}
  //             type="text"
  //             id="item"
  //           />
  //         </div>
  //         <button className="btn">Add</button>
  //       </form>
  //     </div>
  //     <h1>Todo List</h1>
  //     {newItem.map((item) => {
  //       ;<ul>
  //         <li>{item}</li>
  //       </ul>
  //     })}
  //   </>
  // )
}

export default App

import React from 'react'
import card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
     <div className='card'>
      <h1>Hello Ramesh, how are you?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, deserunt?</p>
     </div>
 <div>
  <Navbar/>
  <card/>
 </div>

    </div>
  )
}

export default App

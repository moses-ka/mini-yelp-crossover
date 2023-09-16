import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Details from './Components/Details'



function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
    </>
  )
}

export default App

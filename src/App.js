import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Documentation from './pages/documentation/documentation'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="documentation" element={<Documentation />} />
         </Routes>
      </div>
   )
}

export default App

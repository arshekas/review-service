import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Documentation from './pages/documentation/documentation'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'

function App() {
   return (
      <div>
         <Header />
         <div className="app-wrapper">
            <Routes>
               <Route exact path="/" element={<Homepage />} />
               <Route path="documentation" element={<Documentation />} />
               <Route path="login" element={<Login />} />
            </Routes>
         </div>
      </div>
   )
}

export default App

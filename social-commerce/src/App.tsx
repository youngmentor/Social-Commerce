import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Component/Onboarding/Login/Login'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path='/' element={<Login />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App

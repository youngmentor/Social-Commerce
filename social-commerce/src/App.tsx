import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Component/Onboarding/Login/Login'
import ForgetPassword from './Component/Onboarding/ForgetPassword/ForgetPassword'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App

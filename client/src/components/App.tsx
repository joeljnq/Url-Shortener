import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:link' element={<h1>Redirecting...</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Sign up</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

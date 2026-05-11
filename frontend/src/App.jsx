import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Playlist from "./pages/Playlist"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/playlist/:mood" element={<Playlist />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
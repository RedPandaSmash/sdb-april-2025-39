import {Routes, Route} from "react-router"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"

export default function BasicRouting() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}
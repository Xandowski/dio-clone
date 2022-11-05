import { Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

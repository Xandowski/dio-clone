import { Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { Home } from "./pages/home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  )
}

import { Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";

export function App () {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="register" element={ <Register /> } />
    </Routes>
  )
}
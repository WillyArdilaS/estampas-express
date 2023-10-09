import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/*" element={<LogIn />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
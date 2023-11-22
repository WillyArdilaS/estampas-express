import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import TshirtDetail from "./Pages/TshirtDetail";
import ShoppingCart from "./Pages/ShoppingCart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route path="/*" element={<LogIn />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/TShirtDetails" element={<TshirtDetail />} /> 
        <Route path="/ShoppingCart" element={<ShoppingCart />} /> 
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
import{Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { About } from "./Pages/About";
import { Navbar } from "./Components/navbar";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  
  return (
  <>

    <Navbar quantity={quantity}  />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store  quantity={quantity} setQuantity={setQuantity}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container> 

  </>
  )
}
export default App

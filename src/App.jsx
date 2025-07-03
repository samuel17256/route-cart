// import Mode from "./components/Mode"
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";


function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
   </BrowserRouter>
    {/* <Mode /> */}
    </>
  )
}

export default App

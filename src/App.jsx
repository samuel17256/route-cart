// import Mode from "./components/Mode"
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import {products} from "../products";

function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home products={products}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/Products" element={<Product products={products}/>} />
      <Route path="/Products/:productId" element={<ProductDetails products={products}/>} />
    </Routes>
   </BrowserRouter>
    {/* <Mode /> */}
    </>
  )
}

export default App

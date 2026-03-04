import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Inspiration from "./routes/Inspiration";
import Contactus from "./routes/Contactus";
import OurPlayscapes from "./routes/OurPlayscapes";
import OurProducts from "./routes/OurProducts";
import AboutUs from "./routes/AboutUs";
import PageError from "./routes/PageError";
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/ourplayscapes" element={<OurPlayscapes />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </>
  );
  
}

export default App;
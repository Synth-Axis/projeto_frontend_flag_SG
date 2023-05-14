import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Policy from "./pages/Policy";
import { Route, Routes } from "react-router-dom";
import Partners from "./Components/Partners";

function App() {
  return (
    <div className="general">
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

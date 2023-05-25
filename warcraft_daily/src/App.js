import "./App.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Policy from "./pages/policy/Policy";
import BlogPost from "./pages/blogpost/BlogPost";
import { Route, Routes } from "react-router-dom";
import PostData from "../src/assets/objects/PostData";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState();

  const sendPostId = (post) => {
    setPostId(post);
  };

  return (
    <div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog data={PostData} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route
            path="/blogpost/:postId"
            element={<BlogPost setPost={sendPostId} data={PostData[postId]} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

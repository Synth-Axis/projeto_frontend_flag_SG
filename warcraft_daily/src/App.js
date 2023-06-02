import "./App.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Policy from "./pages/policy/Policy";
import BlogPost from "./pages/blogpost/BlogPost";
import FeaturedPost from "./pages/blogpost/FeaturedPost";
import { Route, Routes } from "react-router-dom";
import PostData from "./assets/objects/PostData";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState();

  const getPostId = (number) => {
    setPostId(number);
  };

  const [featuredPost, setFeaturedPost] = useState();

  const getFeaturedPost = (number) => {
    setFeaturedPost(number);
  };

  return (
    <div className="app-container">
      <Navigation />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postId={getPostId}
                data={PostData}
                handleClick={getFeaturedPost}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog
                postId={getPostId}
                data={PostData}
                handleClick={getFeaturedPost}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route
            path="/blogpost/:id"
            element={<BlogPost data={PostData[postId]} />}
          />
          <Route
            path="/blogfeaturedpost/:id"
            element={<FeaturedPost data={PostData[featuredPost]} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

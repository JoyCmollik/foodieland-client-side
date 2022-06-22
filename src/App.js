import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Navbar from "./components/sharedComponents/Navbar/Navbar";
import AuthProvider from "./contexts/AuthProvider";
import BlogListPageComponent from "./pages/BlogListPage/BlogListPageComponent/BlogListPageComponent";
import ContactPageComponent from "./pages/ContactPage/ContactPageComponent/ContactPageComponent";
import HomePageComponent from "./pages/HomePage/HomePageComponent/HomePageComponent";
import RecipePageComponent from "./pages/RecipePage/RecipePageComponent/RecipePageComponent";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<RecipePageComponent />} />
          <Route path="/blog" element={<BlogListPageComponent />} />
          <Route path="/contact" element={<ContactPageComponent />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Home from "./pages/Home";
  import Login from "./pages/Login";
  import Signup from "./pages/Signup";
  import PlantDetails from "./pages/PlantDetails";
  import Profile from "./pages/Profile";
  import { AuthProvider } from "./context/AuthContext";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/plant/:id" element={<PlantDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    );
  }

  export default App;
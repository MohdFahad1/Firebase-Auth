import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import CreateListing from "./pages/CreateListing";
import Home from "./pages/Home";


const App = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books/listing" element={<CreateListing />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
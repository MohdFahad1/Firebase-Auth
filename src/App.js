import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<h1>Login</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
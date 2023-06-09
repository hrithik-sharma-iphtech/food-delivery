import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="Restaurants" element={<Restaurants />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import "./styles/globals.css";
import "./styles/reset.css";


function App() {

  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/сontacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App

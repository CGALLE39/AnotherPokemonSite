import './App.css';
import {Home} from "./components/Home";
import {About} from "./components/About";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from "./components/Layout";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="blogs" element={<About />} />

          </Routes>
          <Footer />

      </BrowserRouter>
  );
}

export default App;

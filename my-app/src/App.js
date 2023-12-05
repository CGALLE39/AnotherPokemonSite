import './App.css';
import {Home} from "./components/Home";
import {About} from "./components/About";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from "./components/Layout";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<About />} />

              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

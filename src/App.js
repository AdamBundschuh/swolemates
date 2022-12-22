import React from "react";
import Header from "./components/Header";
import "./styling/App.css";
import CardComplete from "./components/CardsComplete";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import Chats from "./components/Chats.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardComplete />} />
          <Route path="chats" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

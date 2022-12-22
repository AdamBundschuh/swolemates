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

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardComplete />} />

          <Route path="chat" element={<h1>Chat Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

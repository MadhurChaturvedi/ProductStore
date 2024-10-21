import React from "react";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import { useProductStore } from "./store/product";

function App() {
  const { products } = useProductStore();
  return (
    <div className="h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;

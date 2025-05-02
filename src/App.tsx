import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import CardPage from "./Pages/CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;

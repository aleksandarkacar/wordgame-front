import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/word" element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="/word" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

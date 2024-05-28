import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import QuizEN from "./pages/QuizzEn";
import QuizFR from "./pages/QuizzFR";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/quizen" element={<QuizEN />} />
          <Route path="/quizfr" element={<QuizFR />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
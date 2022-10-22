import { lazy } from "react";
import { Loadable } from "./HOC/loadable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = Loadable(lazy(() => import("@/pages/Login/Login")));
const AboutPage = Loadable(lazy(() => import("@/pages/About/About")));
const HomePage = Loadable(lazy(() => import("@/pages/Home/Home")));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useContext } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import PodcastContext from "./context/PodcastContext";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Episodes from "./components/Episodes";

function App() {
  const { token } = useContext(PodcastContext);

  useEffect(() => {
    console.log("podcast context ", PodcastContext);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">{token ? <Dashboard /> : <Login />}</div>
          }
        />
        <Route path="/:id" element={<Episodes />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

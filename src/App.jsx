import { useEffect, useRef, useState } from "react"
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './Routes/AnimatedRoutes'
import Nav from "./Components/Header/Nav"
import Loader from "./Components/Loader/Loader"
import LenisSetup from "./Components/Lenis"
import Footer from "./Components/Footer/Footer"
import { ToastContainer, Bounce } from 'react-toastify'

function App() {

  const [nextNav, setNextNav] = useState(sessionStorage.getItem("nextNav") || "/");


  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = LenisSetup(); // only initialize once
    return () => {
      // Optional cleanup if needed
      lenisRef.current?.destroy?.();
    };
  }, []);

  return (
    <Router>
      <Loader />
      <Nav setNextNav={setNextNav} nextNav={nextNav} />
      <AnimatedRoutes nextNav={nextNav} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Footer />
    </Router>
  )
}

export default App

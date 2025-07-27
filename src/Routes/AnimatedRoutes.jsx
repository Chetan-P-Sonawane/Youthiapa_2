import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from "motion/react"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from '../Pages/Products'
import Login from '../Components/Login/Login'
import Cart from '../Pages/Cart'
import Profile from '../Components/Profile/Profile'
import ProductDetail from '../Components/Product/ProductDetails'


const AnimatedRoutes = ({ nextNav }) => {
    const location = useLocation(); 
    
    const handleExitComplete = () => {
        window.scrollTo(0, 0);
    }
    return (
        <AnimatePresence mode="wait" exitBeforeEnter onExitComplete={handleExitComplete}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home nextNav={nextNav} />} />
                <Route path="/products" element={<Products nextNav={nextNav} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About nextNav={nextNav} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes
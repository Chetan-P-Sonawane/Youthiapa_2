import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Mag from "../MagnetEffect/Mag";

import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'motion/react';
import HeaderLinks from './menu/HeaderLinks';


const Nav = ({ setNextNav, nextNav }) => {

    const Navs = [
        {
            "navname": "Home",
            "link": "/",
        },
        {
            "navname": "Products",
            "link": "/products",
        },
        {
            "navname": "About",
            "link": "/about",
        }
    ]

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [menuActive, setMenuActive] = useState(false);

    const navigate = useNavigate();

    // saving to session storage is to show routes name in the page transition
    // removed temporory because it was causing high CLS

    useEffect(() => {
        // Sync state with sessionStorage when it changes
        sessionStorage.setItem("nextNav", nextNav);
        // Save nextNav value in sessionstorage for reloads.
    }, [nextNav]);


    const handleNavigate = (path) => {

        setNextNav(path); // Set the next route immediately.
        setMenuActive(false);

        setTimeout(() => {
            navigate(path); // Navigate after a short delay 
        }, 100); // 100ms delay ensures the animation sees the correct text
    };


    return (
        <div className=" fixed z-[9]  w-[100%] p-3 ">
            <div className="navbar rounded-xl relative max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-10 py-4 flex justify-between items-center ">
                <div className='w-[30%] sm:hidden  text-[5vw]'>
                    <button onClick={() => { setMenuActive(!menuActive) }}>
                        <RxHamburgerMenu />
                    </button>
                </div>
                <div className=' w-[30%] lg:w-fit  flex items-center justify-center sm:justify-start self-center '>
                    <Mag>
                    <img className='w-28' src="https://youthiapa.com/cdn/shop/files/Logo_430x_2cbbc556-17f8-4298-977c-8fb9c9754d18.png?v=1747313802&width=165" alt="" />
                    </Mag>
                </div>

                <div className='hidden sm:flex items-center gap-10 '>
                    {
                        Navs.map((item, index) => (
                            <h4 key={index} className=' text-[1.8vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1vw] uppercase'>
                            <Mag >
                                <NavLink
                                    to={item.link}
                                    onClick={() => handleNavigate(item.link)}
                                    className={`navlink text-textColor2 transition-colors duration-500  `}>
                                    {item.navname}
                                </NavLink>
                            </Mag>
                            </h4>
                            
                        ))
                    }
                </div>

                <div className='w-[30%] sm:w-[20%] lg:w-fit nav-part-2 flex items-center justify-end gap-2 md:gap-4 text-[6vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.6vw] cursor-pointer'>
                   
                    <Link to="/cart">
                        <Mag>
                            <PiShoppingCartSimpleLight />
                        </Mag>
                    </Link>
                    
                    <Link to={isLoggedIn ? "/profile" : "/login"}>
                        <Mag>
                            <PiUserLight />
                        </Mag>
                    </Link>
                </div>
                
            </div>
            <AnimatePresence mode="wait">
                {
                    menuActive && <HeaderLinks handleNavigate={handleNavigate} menuActive={menuActive} setMenuActive={setMenuActive} />
                }
            </AnimatePresence>
        </div>
    )
}


export default Nav
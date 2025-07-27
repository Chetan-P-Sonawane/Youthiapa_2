import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import NavCurve from './NavCurve';
import { GrClose } from "react-icons/gr";


const HeaderLinks = ({ handleNavigate, menuActive, setMenuActive }) => {

    const Navs = [
        {
            "navname": "Home",
            "link": "/",
        },
        {
            "navname": "About",
            "link": "/about",
        },
        {
            "navname": "Products",
            "link": "/products",
        },
    ]

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            whileInView: "whileInView",
            variants,
        }
    }

    const menuSlide = {
        initial: { x: "calc(100% + 100px)" },
        enter: { x: "0%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
        exit: { x: "calc(100% + 100px)", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.23 } }
    }

    const slide = {
        initial: { x: "80px" },
        enter: (i) => ({ x: "0px", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.07 * i } }),
        exit: (i) => ({ x: "80px", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.07 * i } })
    }

    return (

        <motion.div {...anim(menuSlide)} className='menu'>
            <NavCurve></NavCurve>
            <div className='sidenav-body '>
                <div className='sidenav'>
                    
                    <div className='navheader'>
                        <p>Navigation</p>
                    </div>

                    <div className='navcontent'>
                        {
                            Navs.map((item, index) => (
                                <motion.h4  {...anim(slide)} key={index} custom={index}>
                                    <NavLink
                                        to={item.link}
                                        onClick={() => handleNavigate(item.link)}
                                        className="navlink after:bg-white transition-colors duration-500 ">
                                        {item.navname}
                                    </NavLink>
                                </motion.h4>
                            ))
                        }
                        <div className='flex items-center justify-center'>
                          <button className='closebtn' onClick={() => { setMenuActive(!menuActive) }}><GrClose /></button>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>


    )
}

export default HeaderLinks

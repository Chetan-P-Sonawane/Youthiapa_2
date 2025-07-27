import { motion } from 'motion/react'
import "./NavCurve.css";

const NavCurve = () => {

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            whileInView: "whileInView",
            variants,
        }
    }

    const initialnavSvgPath = `M100 0 L101 ${window.innerHeight} Q-101 ${window.innerHeight / 2} 100 0`
    const targetnavSvgPath = `M100 0 L101 ${window.innerHeight} Q101 ${window.innerHeight / 2} 100 0`

    const navSvgAnim = {
        initial: { d: initialnavSvgPath },
        enter: { d: targetnavSvgPath, transition: { duration: 1, ease: [0.65, 0, 0.35, 1] } },
        exit: { d: initialnavSvgPath, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } },
    }

    return (
        <motion.svg className='svgNavcurve'>
            <motion.path {...anim(navSvgAnim)}  ></motion.path>
        </motion.svg>
    )
}

export default NavCurve
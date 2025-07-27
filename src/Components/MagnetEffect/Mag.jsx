import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const Mag = ({children}) => {

    const magRef = useRef(null)
    const [position,setPosition] = useState({x:0, y:0})

    const mouseMove = (e) =>{
        // console.log(e);
       const {clientX, clientY} = e;
       const { left, top, width, height } = magRef.current.getBoundingClientRect();
      const x = clientX - (left + (width/2));
      const y = clientY - (top + (height/2));
      setPosition({x,y})
    }

    const mouseLeave = () => {
        setPosition({x:0,y:0})
    }

    const { x, y } = position;

  return (
    <motion.div
     onMouseMove={mouseMove}
     onMouseLeave={mouseLeave}
     ref={magRef}
     animate={{x, y}}
     transition={{type:"spring", stiffness:150, damping: 15, mass:0.1}}
    >
        {
            children
        }
    </motion.div>
  )
}

export default Mag
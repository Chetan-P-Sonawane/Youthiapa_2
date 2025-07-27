import { motion } from "motion/react"

const anim = (variants) => {
    return {
        initial: "initial",
        whileHover: "hovered",
        variants
    }
}

const Zoop = ({ children, link }) => {

    const DURATION = 0.25;
    const STAGGER = 0.035;

    const textoneanim = {
        initial: { y: 0 },
        hovered: { y: "-100%" }
    }

    const texttwoanim = {
        initial: { y: "100%" },
        hovered: { y: "0" }
    }

    const split1 = children.split("").map((item, i) => (
        <motion.span
            variants={{ ...textoneanim }}
            transition={{
                duration: DURATION,
                ease: [0.65, 0, 0.35, 1],
                delay: STAGGER * i
            }}
            key={i} className='inline-block '>
            {item}
        </motion.span>
    ))
        
    const split2 = children.split("").map((item, i) => (
        <motion.span
            variants={{ ...texttwoanim }}
            transition={{
                duration: DURATION,
                ease: [0.65, 0, 0.35, 1],
                delay: STAGGER * i
            }}
            key={i} className='inline-block'>
            {item}
        </motion.span>
    ))

    return (
        <motion.div
            href={link}
            {...anim()}
            className='relative block overflow-hidden whitespace-nowrap cursor-pointer'
        >
            <div className='splitone'>
                {split1}
            </div>
            <div className='splittwo absolute inset-0'>
                {split2}
            </div>
        </motion.div>
    )
}

export default Zoop
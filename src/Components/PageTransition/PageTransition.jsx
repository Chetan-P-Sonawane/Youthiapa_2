import { motion } from "motion/react"

const PageTransition = ({children}) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative bg-white"
    >
        {children}
    </motion.div>
  )
}

export default PageTransition
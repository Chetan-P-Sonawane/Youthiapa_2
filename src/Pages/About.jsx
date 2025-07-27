import { motion } from "motion/react"
import Story from "../Components/StoryComponents/Story"
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Story />
    </motion.div>
  )
}

export default About
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero/Hero";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-white"
    >
      <Hero />
      <div className="h-[200vh] "></div>

    </motion.div>
  );
};

export default Home;
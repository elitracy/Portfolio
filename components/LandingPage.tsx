import HomeCircle from "../components/HomeCircle"
import { motion } from "framer-motion"
const LandingPage = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-start items-center pt-64"
      exit={{ x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeInOut", duration: 1.0, delay: 0, y: { delay: 2.0, duration: 0.8 } }
        }}
      >
        <h1 className="text-6xl tracking-wider flex text-white text-center mb-8">
          Elias
          <motion.div
            initial={{ x: -40, opacity: 0.0 }}
            animate={{ x: 10, opacity: 0.8, transition: { ease: "easeInOut", duration: 0.8, delay: 1.1 } }}
          >
            <h1 className="text-6xl tracking-wider text-white text-center">Tracy</h1>
          </motion.div>
        </h1>
      </motion.div>
      <motion.div
        className="w-full h-full flex justify-center items-start"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { ease: "easeOut", duration: 1.2, delay: 3.0 } }}
      >
        <HomeCircle src="/../public/images/climbing_yosemite-square.jpeg" text="About" />
        <HomeCircle src="/../public/images/skate-square.jpg" text="Projects" />
        <HomeCircle src="/../public/images/flip-square.jpg" text="Contact" />
        <HomeCircle src="/../public/images/writing-square.jpg" text="Resume" />
      </motion.div>
    </motion.div>
  )
}

export default LandingPage

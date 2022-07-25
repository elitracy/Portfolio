import SideImage from "./SideImage"
import Navigation from "./Navigation"
import ProjectItem from "./ProjectItem"
import projects from "../public/projects"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

const Projects = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div className="w-full h-full">
      <AnimatePresence>{toggleNav && <Navigation />}</AnimatePresence>
      <motion.div
        className="w-full h-screen flex justify-around items-center text-white bg-black"
        initial={{ x: "100%", opacity: 0.5 }}
        animate={{ x: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.8, delay: 0.5 } }}
        exit={{ x: "-100%", transition: { ease: "easeOut", duration: 0.75 } }}
      >
        <motion.div
          className="w-1/2 flex flex-col justify-start p-12 h-full"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0, transition: { ease: "easeInOut", duration: 1.0, delay: 1.0 } }}
        >
          <div className="w-full h-auto flex justify-start items-center mb-8">
            <motion.div
              className="h-8 w-8 mr-4 rounded-full cursor-pointer"
              onClick={() => {
                setToggleNav(!toggleNav)
              }}
            >
              <AiOutlineMenu
                color="white"
                className={`w-full h-full transition transform ${toggleNav && "rotate-90"} hover:scale-110`}
              />
            </motion.div>
            <h1 className="text-4xl">Projects</h1>
          </div>
          {projects.map(p => {
            return <ProjectItem {...p} key={p.title} />
          })}
        </motion.div>
        <SideImage src="/../public/images/skate.jpg" />
      </motion.div>
    </div>
  )
}

export default Projects

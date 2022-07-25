import { motion, AnimatePresence } from "framer-motion"
import { BsTriangleFill } from "react-icons/bs"
import { useState } from "react"

const AboutItem = (info: { title: string; body: string }) => {
  const [toggleText, setToggleText] = useState(false)

  return (
    <AnimatePresence>
      <div onClick={() => setToggleText(!toggleText)} className="my-4 cursor-pointer transition-all">
        <div className="flex justify-start items-center">
          <div
            className={`w-4 h-4 bg-${
              toggleText ? "white" : "black"
            } border-2 border-white rounded-full transition-all hover:bg-white`}
          />
          <h3 className="text-xl font-medium tracking-wide ml-2">{info.title}</h3>
        </div>
        {toggleText && (
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0, transition: { duration: 0.25, ease: "easeOut" } }}
            exit={{ y: -10, opacity: 0 }}
          >
            <p className="transition-all hover:text-gray-200 cursor-auto pt-4 pl-4">{info.body}</p>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default AboutItem

import { motion, AnimatePresence } from "framer-motion"
import { BsTriangleFill } from "react-icons/bs"
import { useState } from "react"

const AboutItem = (props: {
  title: string
  body: string
  currentItem: string
  setCurrentItem: (currentItem: string) => void
}) => {
  const { title, body, currentItem, setCurrentItem } = props
  return (
    <AnimatePresence>
      <div
        onClick={() => {
          setCurrentItem(title)
        }}
        className="my-4 cursor-pointer transition-all"
      >
        <div className="flex justify-start items-center">
          <motion.div
            className={`w-1 h-1 bg-${
              currentItem === title ? "white" : "black"
            } border-2 border-white rounded-full p-2 m-1 transition-all hover:bg-white`}
            whileHover={{ scale: 1.2, transition: { delay: 0, duration: 0.05 } }}
          />
          <h3 className="text-xl font-medium tracking-wide ml-2">{title}</h3>
        </div>
        {currentItem === title && (
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
            exit={{ y: -40, opacity: 0, transition: { duration: 0.5 } }}
          >
            <p className="transition-all hover:text-gray-200 cursor-auto pt-4 pl-4">{body}</p>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default AboutItem

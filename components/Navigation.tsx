import { motion } from "framer-motion"
import { PageContext } from "../utils/pageContext"
import { useContext } from "react"

const Navigation = () => {
  const { setPage, setContextChange } = useContext(PageContext)
  return (
    <motion.div
      className="w-full absolute z-10 flex justify-around items-center bg-black "
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { ease: "easeOut" } }}
      exit={{ y: "-100%", opacity: 0 }}
    >
      <h1 className="text-white font-medium -mx-20">Elias Tracy</h1>
      {["Home", "About", "Projects", "Contact"].map(p => (
        <motion.h1
          key={p}
          className="py-1 my-2 text-center text-lg text-gray-300 transition-all cursor-pointer"
          onClick={() => {
            setPage(p)
            setContextChange(true)
          }}
          whileHover={{ color: "white", scale: 1.1, transition: { ease: "easeInOut", duration: 0.05 } }}
        >
          {p}
        </motion.h1>
      ))}
    </motion.div>
  )
}

export default Navigation

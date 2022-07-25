import type { NextPage } from "next"
import Image from "next/image"
import { PageContext } from "../utils/pageContext"
import { useContext } from "react"
import { BounceLoader } from "react-spinners"
import { motion, useAnimation } from "framer-motion"

const HomeCircle: NextPage<{ text: string; src: string }> = ({ src, text }) => {
  const { setPage, contextChange, setContextChange } = useContext(PageContext)

  return (
    <motion.button
      onClick={() => {
        setPage(text)
        setContextChange(true)
      }}
      className="w-1/8 m-12 hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
      whileHover={{ scale: 1.1, transition: { ease: "easeIn", duration: 0.05 } }}
    >
      <Image src={src} className="rounded-full" width="150" height="150" alt="headshot" />
      <h1 className="text-center text-xl tracking-widest text-white">{text}</h1>
    </motion.button>
  )
}

export default HomeCircle

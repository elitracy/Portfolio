import Image from "next/image"
import { PageContext } from "../utils/pageContext"
import { ReactElement, useContext } from "react"
import { motion } from "framer-motion"

const HomeCircle = (props: { src: string; text: string }) => {
  const { setPage, setContextChange } = useContext(PageContext)

  const { src, text } = props
  return (
    <div
      onClick={() => {
        setPage(text)
        setContextChange(true)
      }}
      className="w-1/8 m-12 transform hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
      // whileHover={{ scale: 1.1, transition: { ease: "easeIn", duration: 0.05 } }}
    >
      <Image src={src} className="rounded-full" width="150" height="150" alt="nav-image" />
      <h1 className="text-center text-xl tracking-widest text-white">{text}</h1>
    </div>
  )
}

export default HomeCircle

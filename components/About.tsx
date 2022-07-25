import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BsTriangleFill } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"
import { IoIosClose } from "react-icons/io"
import AboutItem from "./AboutItem"
import Navigation from "./Navigation"
import SideImage from "./SideImage"
import { useState } from "react"

const infoText = [
  {
    title: "Experience",
    body: `I am proficient in object oriented programming languages, advanced data structures and algorithms, several
          javascript frameworks, and mobile app development. I have worked on many projects over the past 6 years giving
          me a very diverse background in the full tech stack. I have worked with Java, Python, and
          Javascript/Typescript user interfaces`
  },
  {
    title: "Programming",
    body: `One of my favorite parts of computer science is web design and user interaction. Watching layouts and designs
          come to life in real time is so interesting and rewarding for me. Unlike other parts of computer science, web
          and mobile design feels fast paced and fun. I have been using HTML/CSS/Javascript for around 5 years now and
          love seeing new designs and websites come to life.`
  },
  {
    title: "Creativity",
    body: `I enjoy learning new things especially through the creative process as I also have a large background in film
          and photography. For 6 years I was involved a film program which constantly required group work, creative
          problem solving, and time management. This field is now one of my favorite hobbies and I love how it parallels
          with computer science. Personally, I always find myself learning new things and meeting new people. If you are
          interested in more of my photography visit my portfolio website.`
  },
  {
    title: "Hobbies",
    body: `I also enjoy rock climbing, snowboarding,
          camping, hiking, and playing the guitar. Sitting inside and working on a computer all day can be
          isolating, so a lot of my hobbies and free time are spent out in nature or with friends.`
  }
]

const About = () => {
  const [currentItem, setCurrentItem] = useState("Experience")
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
            <h1 className="text-4xl">About</h1>
          </div>
          <p className="mb-4">
            Hello, my name is Elias Tracy. I am a senior computer science student at Texas A&M University who loves to
            take risks.
          </p>
          {infoText.map((info, index) => {
            return (
              <AboutItem
                key={index}
                title={info.title}
                body={info.body}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            )
          })}
        </motion.div>
        <SideImage src="/../public/images/climbing_yosemite.jpeg" />
      </motion.div>
    </div>
  )
}

export default About

import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineMenu, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { MdOutlineMail } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import Navigation from "./Navigation"
import SideImage from "./SideImage"
import ContactItem from "./ContactItem"
import { useState } from "react"
import Image from "next/image"

const Contact = () => {
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
          className="w-2/3 flex flex-col justify-start p-12 h-full"
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
            <h1 className="text-4xl">Contact</h1>
          </div>
          <div className="w-full h-full flex justify-center items-center ">
            <div className="flex-2 w-full h-full flex flex-col mt-16">
              <div className="rounded-full mx-auto overflow-hidden border-4 border-gray-800 mb-6">
                <Image
                  src="/../public/images/headshot-square.JPG"
                  width={250}
                  height={250}
                  objectFit="cover"
                  alt="headshot"
                />
              </div>
              <h2 className="w-2/3 pr-4 text-2xl font-bold mb-3 text-green-500">I'm open to work!</h2>
              <p className="pr-4">Shoot me an email or reach out to me on social media.</p>
            </div>
            <div className="flex flex-col w-1/3 h-full justify-center items-center">
              <ContactItem
                text="Email"
                icon={<MdOutlineMail color="white" size={60} />}
                link="mailto:elitracy19@gmail.com"
                borderColor="border-green-800"
              />
              <ContactItem
                text="Instagram"
                icon={<AiOutlineInstagram color="white" size={60} />}
                link="https://www.instagram.com/eli_tracy"
              />
              <ContactItem
                text="Github"
                icon={<BsGithub color="white" size={60} />}
                link="https://www.github.com/elitracy"
              />
              <ContactItem
                text="LinkedIn"
                icon={<AiOutlineLinkedin color="white" size={60} onClick={() => window.open()} />}
                link="https://www.linkedin.com/in/eli-tracy-3608631b8/"
              />
            </div>
          </div>
        </motion.div>
        {window.innerWidth > 1200 && <SideImage src="/../public/images/flip.jpg" />}
      </motion.div>
    </div>
  )
}

export default Contact

import { motion } from "framer-motion"
import Image from "next/image"
import { BsTriangleFill } from "react-icons/bs"
import AboutItem from "./AboutItem"

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
          camping, hiking, and playing the guitar. Sitting inside and working on a computer all day can be very intense
          and isolating, so a lot of my hobbies and free time are spent out in nature or with friends.`
  }
]

const About = () => {
  return (
    <motion.div
      className="w-full h-screen flex justify-around items-center text-white"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.5, delay: 0.5 } }}
      exit={{ x: "-100%" }}
    >
      <motion.div
        className="w-1/2 flex flex-col justify-start p-12 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1.0, delay: 1.0 } }}
      >
        <h1 className="text-4xl mb-4">About</h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 } }}>
          Hello, my name is Elias Tracy. I am a senior computer science student at Texas A&M University who loves to
          learn.
        </motion.p>
        {infoText.map((info, index) => {
          console.log(info.body)
          return <AboutItem key={index} title={info.title} body={info.body} />
        })}
      </motion.div>

      <div className="-z-10 w-1/2 h-full flex justify-end">
        <Image
          src="/../public/images/climbing_yosemite.jpeg"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          alt="climbing_yosemite"
        />
      </div>
    </motion.div>
  )
}

export default About

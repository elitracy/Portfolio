import { BsGithub } from "react-icons/bs"
import { GrAppleAppStore } from "react-icons/gr"

const ProjectItem = (props: {
  title: string
  spec: string
  description: string
  githubLink: string
  appStoreLink?: string
}) => {
  const { title, spec, description, githubLink, appStoreLink } = props
  return (
    <div className="w-full h-auto flex flex-col border-2 border-gray-900 p-2 px-3 rounded-lg my-3 cursor-default transform hover:scale-105 transition-all">
      <div className="w-full flex justify-start items-center">
        <h1 className="text-2xl tracking-wide">{title}</h1>
        {githubLink && (
          <BsGithub
            size={20}
            className="ml-2 cursor-pointer transform transition-all hover:scale-110"
            onClick={() => window.open(githubLink)}
          />
        )}
        {appStoreLink && (
          <GrAppleAppStore
            size={20}
            className="ml-2 cursor-pointer transform transition-all hover:scale-110"
            onClick={() => window.open(appStoreLink)}
          />
        )}
      </div>
      <p className="text-sm py-2 text-green-500"> {spec}</p>
      <p className="text-md">{description}</p>
    </div>
  )
}

export default ProjectItem

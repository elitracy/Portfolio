import fileSaver from "file-saver"

const saveFile = () => {
  fileSaver.saveAs("http://localhost:3000/resources/resume.pdf")
}
const Resume = () => {
  return (
    <div>
      <h1 className="text-white">Hello from Resume</h1>
      <button onClick={() => window.open("../resources/resume.pdf", "_blank")} className="text-white">
        Download
      </button>
    </div>
  )
}

export default Resume

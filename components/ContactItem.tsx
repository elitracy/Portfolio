const ContactItem = (props: { text: string; icon: React.ReactElement; link: string; borderColor?: string }) => {
  const { text, icon, link, borderColor } = props
  return (
    <div
      className={`flex w-full justify-center mb-8 items-center p-5 border-2 ${
        borderColor ? borderColor : "border-gray-800"
      } rounded-xl transform hover:scale-105 transition-all cursor-pointer`}
      onClick={() => window.open(link)}
    >
      {icon}
      <h1 className="text-3xl ml-2">{text}</h1>
    </div>
  )
}

export default ContactItem

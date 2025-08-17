import React from 'react'
import { FaMagic, FaCheckCircle, FaImage, FaVideo } from "react-icons/fa";
import Card from "./component/Cards";;
function About() {
    const features = [
      {
        title: "AI Prompt Generator",
        description: "Transform your ideas into professional Verify your prompt quality",
        icon: <FaMagic className="text-3xl text-blue-500" />,
      },
      {
        title: "Prompt Checking",
        description: "Verify your prompt quality Transform your ideas into professional prompts",
        icon: <FaCheckCircle className="text-3xl text-purple-500" />,
      },
      {
        title: "Image Prompts",
        description: "Create stunning AI images Transform your ideas into professional prompts",
        icon: <FaImage className="text-3xl text-pink-500" />,
      },
    ]
  return (
     <div className="flex justify-center gap-6 p-6 max-w-[1300px] mx-auto ">
      {features.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          className='w-[400px] '

        />
      ))}
    </div>
  )
}

export default About
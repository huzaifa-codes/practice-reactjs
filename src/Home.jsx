// src/components/StepsSection.jsx
import React from "react";
import Card from "./component/Cards";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Define Clear Objectives",
      description:
        "Start with a clear goal and specific requirements for your prompt",
      link: { text: "AI-powered financial planning tool", url: "#" },
    },
    {
      number: "02",
      title: "Provide Context",
      description:
        "Include relevant background information and specific details",
    },
    {
      number: "03",
      title: "Structure Your Prompt",
      description:
        "Organize information logically with clear sections and formatting",
    },
    {
      number: "04",
      title: "Refine and Test",
      description:
        "Iterate and improve your prompt based on the results",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <Card
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
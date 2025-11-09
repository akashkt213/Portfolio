import InfoBox from "./InfoBox";

const HomeInfo = ({ currentStage }: { currentStage: Number }) => {
  const renderContent = {
    1: (
      <InfoBox
        title="Hi, I’m Akash 👋"
        description="I’m a Software Engineer who loves building modern web applications."
      >
        {/* <p className="text-gray-400 text-sm">Let’s explore what I can do!</p> */}
      </InfoBox>
    ),
    2: (
      <InfoBox
        title="My Skills 💡"
        description="I specialize in React, TypeScript, and Node.js with strong experience in UI development and API integration."
        linkText="View Skills →"
        linkTo="/skills"
      />
    ),
    3: (
      <InfoBox
        title="My Projects 🚀"
        description="From dynamic web apps to scalable backend systems, I love turning ideas into interactive experiences."
        linkText="Explore Projects →"
        linkTo="/projects"
      />
    ),
    4: (
      <InfoBox
        title="Contact Me 📬"
        description="Let’s collaborate or just say hi! I’m always open to discussing new opportunities and projects."
        linkText="Get in Touch →"
        linkTo="/contact"
      />
    ),
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      {renderContent[currentStage] || (
        <p className="text-gray-500 text-lg">Select a stage to view content.</p>
      )}
    </div>
  );
};

export default HomeInfo;

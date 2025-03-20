import ProgramCard from "./ProgramCard";

const programs = [
  {
    title: "Program 1",
    description: "This is a description for Program 1.",
    link: "#",
  },
  {
    title: "Program 2",
    description: "This is a description for Program 2.",
    link: "#",
  },
  {
    title: "Program 3",
    description: "This is a description for Program 3.",
    link: "#",
  },
  // Add more programs as needed
];

const ProgramGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramGrid;
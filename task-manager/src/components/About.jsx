const About = () => {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">About This App</h2>
      <p className="text-gray-700">
        This is a simple Task Manager built with React, Tailwind CSS, and React Router.
        It fetches tasks from a public API and lets users mark them as complete.
      </p>
    </div>
  );
};

export default About;

import { useEffect, useRef, useState } from "react";

export const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const frontEndSkills = [
    "React",
    "Angular",
    "CSS",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
  ];

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.6 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-20 
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 
        to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="p-6 rounded-xl border border-white/10 
        hover:-translate-y-1 
        hover:border-cyan-400
        hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
        transition-all duration-300 ease-in-out">

          <p className="text-center leading-relaxed mb-6 text-gray-300">
            Frontend Developer with a Computer Engineering background and hands-on experience in Angular
            and React. I build responsive, scalable web applications with strong attention to performance,
            clean architecture, and code quality. Passionate about continuous learning and delivering reliable user experiences.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-10 text-center">
                Frontend
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:-translate-y-1 hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="p-6 rounded-xl border border-white/10 
          hover:-translate-y-1 
          hover:border-cyan-400
          hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
          transition-all duration-300 ease-in-out">

            <h3 className="text-center text-xl font-bold mb-4">
              Education
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Bachelor's Degree in Computer Engineering</strong> - 
                Caraga State University (2021–2025)
              </li>
              <li>
                <strong>Relevant Coursework:</strong> Data Structures, Web Development, 
                Software Engineering, Databases, Networks
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-white/10 
          hover:-translate-y-1 
          hover:border-cyan-400
          hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
          transition-all duration-300 ease-in-out">

            <h3 className="text-center text-xl font-bold mb-4">
              Work Experience
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Frontend Developer Intern</strong> — Jairosoft Inc. (June 2024 – August 2024)
              </li>
              <li>
                Contributed to the development of production frontend features using React, Angular, and TypeScript.
              </li>
              <li>
                Built responsive UI components and participated in debugging and quality assurance.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
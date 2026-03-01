import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-20
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 
        to-cyan-400 bg-clip-text text-transparent text-center">
          Contact
        </h2>

        <div className="p-6 rounded-xl border border-white/10
        hover:-translate-y-1
        hover:border-cyan-400
        hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
        transition-all duration-300 ease-in-out">

          <p className="text-center leading-relaxed mb-8 text-gray-300">
            I'm currently open to frontend developer opportunities,
            including remote and international roles.  
            Feel free to reach out if you'd like to collaborate or discuss a project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          
            <div className="rounded-xl p-4 border border-white/5 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Email
              </h3>

              <a
                href="mailto:hardonejaygen@gmail.com"
                className="text-gray-300 hover:text-white transition"
              >
                hardonejaygen@gmail.com
              </a>
            </div>

            <div className="rounded-xl p-4 border border-white/5 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                GitHub
              </h3>

              <a
                href="https://github.com/jaycsucc27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                    github.com/jaycsucc27
                </a>
            </div>

          
            <div className="rounded-xl p-4 border border-white/5 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Mobile Number
              </h3>

              <a
                href="+639624654893"
              
                className="text-gray-300 hover:text-white transition"
              >
                +639624654893
              </a>
            </div>

        
            <div className="rounded-xl p-4 border border-white/5 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Location
              </h3>

              <p className="text-gray-300">
             Maragusan, Davao de Oro, Philippines
                <br />
                Open to remote work only.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
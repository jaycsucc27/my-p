import { useEffect, useState } from "react";

export const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
      <div
        className={`fixed top-5 left-8 z-50 transition-all duration-500
        ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}
      >
        <h2 className="text-xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Jay Genita
        </h2>
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 
            bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent leading-tight
            transition-all duration-500
            ${
              scrolled
                ? "opacity-0 scale-75 -translate-y-10"
                : "opacity-100 scale-100"
            }`}
          >
            Hi! I'm Jay Genita
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm a passionate frontend developer specializing in modern web technologies. I create
            sleek, responsive websites and web applications that provide seamless user
            experiences. With a strong eye for design and a commitment to clean,
            efficient code, I bring ideas to life on the web. Let's build
            something amazing together!
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded 
              font-medium transition relative overflow-hidden 
              hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,10,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
              hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,10,246,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
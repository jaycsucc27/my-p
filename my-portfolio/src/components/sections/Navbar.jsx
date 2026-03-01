import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {}, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

         
          <a href="#home" className="font-mono text-xl font-bold text-white">
        
          </a>

     
          <div
            className="w-10 h-6 relative cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

      
          <div className="hidden md:flex items-center space-x-8">

            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>

            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>

            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>

            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>

      
            <div className="relative">
              <button
                onClick={() => setResumeOpen(!resumeOpen)}
                className="px-4 py-1 rounded-lg border border-white/10 text-gray-300
                hover:text-white hover:border-cyan-400
                hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]
                transition"
              >
                Resume
              </button>

              {resumeOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg border border-white/10 bg-black/80 backdrop-blur-lg overflow-hidden">

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cyan-400/10 transition"
                  >
                    View
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cyan-400/10 transition"
                  >
                    Download
                  </a>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};
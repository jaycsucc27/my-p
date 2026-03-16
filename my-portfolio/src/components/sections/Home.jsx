import { useEffect, useState } from "react";
import GradientText from "./gradient";
import MagicRings from "./rings";

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
        <GradientText
          colors={["#5227FF", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Jay Genita
        </GradientText>
      </div>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >

        {/* Magic Rings Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <MagicRings
              color="#fc42ff"
              colorTwo="#42fcff"
              ringCount={6}
              speed={1}
              attenuation={10}
              lineThickness={2}
              baseRadius={0.35}
              radiusStep={0.1}
              scaleRate={0.1}
              opacity={1}
              blur={0}
              noiseAmount={0.1}
              rotation={0}
              ringGap={1.5}
              fadeIn={0.7}
              fadeOut={0.5}
              followMouse={false}
              mouseInfluence={0.2}
              hoverScale={1.2}
              parallax={0.05}
              clickBurst={false}
            />
          </div>
        </div>

        <div className="text-center z-10 px-4">
          <GradientText
            className={`text-5xl md:text-7xl font-bold mb-6`}
          >
            Hi! I'm Jay Genita
          </GradientText>

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
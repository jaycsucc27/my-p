import { FadeInSection } from "../FadeIn&Out"

export const Projects = ()=>{

        return <section   id="projects"
            className="min-h-screen flex items-center justify-center py-20"
 
>
      
 <div className="mt-8">
              <FadeInSection>
              
      <p className="text-center text-2xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Projects In Progress
      </p>
 
             
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 
                hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
                
  
<p  className="text-center leading-relaxed mb-6  text-gray-300">
    I am currently building production-ready frontend projects that demonstrate API integration, state management, and responsive UI architecture.

Projects will be published here soon. Stay tuned. 🚀
</p>
</div>
 </FadeInSection>
</div>

        </section>
}
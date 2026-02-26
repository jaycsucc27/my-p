export const About = () =>{

    const frontEndSkills = ["React", "Angular", "TailwindCSS", "TypeScript"];


    return(
        <section
           id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
            to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 
                hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
    
                <p className="text-center text-gray-300 mb-6">
                    Passionate entry-level frontend developer
                </p>
                <div className="grid grid-cols-1 gap-6">
                <div className="rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-10 text-center">
                        Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
        {frontEndSkills.map((tech,key)=>
        (
            <span 
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:-translate-y-1 hover:bg-blue-500/20
            hover:shadow-[0_2px_8_px_rgba(59,130,246,0.2)] transition"
            >
{tech}
            </span>
        )
        
        )}
                    </div>
                    
                </div>
                
             </div>
             
         </div>
         <div className="grid grid-cols-1 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 
                hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
    <h3 className="text-center text-xl font-bold mb-4">
        Education
    </h3>
    <div>
    <h3>Bachelors Degree in Computer Engineering</h3>
</div>
</div>


             </div>
         </div>
         
        </section>

    )
}
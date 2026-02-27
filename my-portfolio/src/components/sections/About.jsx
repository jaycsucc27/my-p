export const About = () =>{

    const frontEndSkills = ["React", "Angular","CSS", "TailwindCSS", "TypeScript", "JavaScript"];


    return(
        <section
           id="about"
            className="min-h-screen flex items-center justify-center py-20"
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
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
      
                <p className=" text-center leading-relaxed mb-6  text-gray-300  ">
                     Frontend Developer with a Computer Engineering background and hands-on experience in Angular,
                     React frameworks. I build responsive, scalable web applications with strong attention to performance,
                     clean architecture, and code quality. Passionate about continuous learning and delivering reliable user experiences.
                </p>
                <div className="grid grid-cols-1 gap-6">
                <div className="rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-10 text-center">
                        Frontend
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
        {frontEndSkills.map((tech,key)=>
        (
            <span 
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:-translate-y-1 hover:bg-blue-500/20
            hover:shadow-[0_2px_8_px_rgba(59,130,246,0.2)] transition items-center"
            >
{tech}
            </span>
        )
        
        )}
                    </div>
                    
                </div>
                
             </div>
             
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 
                hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
                    
    <h3 className="text-center text-xl font-bold mb-4">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-8 inline-block mr-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
 Education

    </h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>
        <strong>Bachelor's Degree in Computer Engineering</strong> - Caraga State University - Cabadbaran Campus (2021-2025)
    </li>
     <li>
            <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Web Development, Software Engineering, Database Systems, Computer Networks
        </li>
</ul>
</div>
<div >
      <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 
                hover:border-cyan-400
                hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]
                hover:shadow-cyan-400/50
                transition-all duration-300 ease-in-out">
    <h3 className="text-center text-xl font-bold mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-8 inline-block mr-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

        Work Experience

    </h3>
   
    <ul className="list-disc text-gray-300 space-y-2">
    <li>
        <strong>Frontend Developer Intern </strong> at Jairosoft Inc. (June 2024 - August 2024)
       
    </li>
     <li>
        Contributed to the development and maintenance of the company’s main web application using React, Angular, TypeScript, and TailwindCSS.
     </li>
     <li>
        Built responsive and reusable UI components aligned with modern design standards.
     </li>
     <li>
        
     </li>
</ul>
    </div>
    
    


</div>


             </div>
   <p className="text-center text-gray-400 mt-4 animate-shake animate-infinite">This is a test</p>
             
            </div> 
         
         
      
        </section>

    )
}
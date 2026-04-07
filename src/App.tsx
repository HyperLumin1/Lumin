import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useInView } from 'motion/react';
import { ArrowUpRight, ArrowDown, Download, Award, GraduationCap, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { PROJECTS } from './data/projects';
import CustomCursor from './components/CustomCursor';
import me from './me.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<'projects' | 'assets' | 'prototypes'>('projects');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { margin: "-10% 0px 0px 0px" });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#d95c14] selection:text-white relative overflow-x-hidden md:cursor-none">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#d95c14] z-[100] origin-left" style={{ scaleX }} />
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay bg-noise"></div>
      
      {/* Top Blur Gradient */}
      <div 
        className="fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none bg-[#0a0a0a]/80"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
        }}
      />

      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5 md:p-6 mix-blend-difference text-white pointer-events-none">
        <motion.div 
          animate={{ opacity: isHeroInView ? 0 : 1, y: isHeroInView ? -10 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-display font-bold text-xl tracking-tighter uppercase"
        >
          Lumin<span className="text-[#d95c14]">.</span>
        </motion.div>
        <div className="flex gap-5 md:gap-6 text-xs md:text-sm font-medium pointer-events-auto tracking-wide uppercase">
          <a href="#work" onClick={() => setActiveTab('projects')} className="hover:text-[#d95c14] transition-colors">Work</a>
        </div>
      </header>

      <main className="px-5 md:px-12 max-w-[1400px] mx-auto pt-28 md:pt-40 pb-20 md:pb-32 relative z-10">
        {/* Hero */}
        <section className="mb-32 md:mb-40 min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Subtle Spotlight */}
            <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(217,92,20,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0" />
            
            <h1 className="font-display text-[18vw] md:text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase text-white mb-6 transition-colors duration-500 relative z-10">
              Lumin<span className="text-[#d95c14]">.</span>
            </h1>
          </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg md:text-2xl text-[#888] uppercase tracking-widest font-display">
                  Faisal Azizi
                </h2>
                <span className="text-[10px] md:text-xs text-[#555] uppercase tracking-[0.5em] font-medium">
                  Game Programmer // Developer
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-10 lg:col-span-8">
                <p className="text-xl md:text-2xl text-[#a0a0a0] leading-relaxed font-medium mb-12">
                  Experienced Unity developer with 5+ years building games and editor tools for PC and mobile platforms. Specialized in gameplay systems, rendering, optimization, and workflow automation.
                </p>
                
                <div className="flex flex-col gap-4 mb-12">
                  <div className="flex items-center gap-4 text-[#888]">
                    <GraduationCap className="w-6 h-6 text-[#d95c14]" />
                    <span className="text-base md:text-lg">Master's Degree</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#888]">
                    <Award className="w-6 h-6 text-[#d95c14]" />
                    <span className="text-base md:text-lg">Academic Excellence Certificate (Topper)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-sm font-medium uppercase tracking-wider mb-12">
                  <a href="#work" className="flex items-center gap-2 text-white hover:text-[#d95c14] transition-colors w-fit border-b border-white hover:border-[#d95c14] pb-1 group/btn">
                    View Portfolio <ArrowDown className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                  <a href="/Faisal_Azizi_CV.pdf" download="Faisal_Azizi_CV.pdf" className="flex items-center gap-2 text-[#888] hover:text-[#d95c14] transition-colors w-fit border-b border-transparent hover:border-[#d95c14] pb-1 group/btn">
                    Download CV <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-[#888]">
                  <a href="https://github.com/HyperLumin1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/faisal-azizi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://luminassets.info" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Globe className="w-6 h-6" />
                  </a>
                  <a href="mailto:FaisalAzizi.K@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium tracking-wider">
                    <Mail className="w-5 h-5" />
                    <span>FaisalAzizi.K@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work */}
        <section id="work" className="mb-40">
          <div className="border-t border-[#333] pt-8 mb-20 flex gap-8 md:gap-12 text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`pb-2 border-b-2 transition-colors ${activeTab === 'projects' ? 'border-[#d95c14] text-white' : 'border-transparent text-[#666] hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveTab('assets')}
              className={`pb-2 border-b-2 transition-colors ${activeTab === 'assets' ? 'border-[#d95c14] text-white' : 'border-transparent text-[#666] hover:text-white'}`}
            >
              Assets
            </button>
            <button 
              onClick={() => setActiveTab('prototypes')}
              className={`pb-2 border-b-2 transition-colors ${activeTab === 'prototypes' ? 'border-[#d95c14] text-white' : 'border-transparent text-[#666] hover:text-white'}`}
            >
              Prototypes
            </button>
          </div>

          {(activeTab === 'projects' || activeTab === 'assets') && (
            <div className="flex flex-col gap-24 md:gap-32">
              {PROJECTS.filter(p => activeTab === 'projects' || p.isAsset).map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className={`md:col-span-8 overflow-hidden bg-[#111] relative rounded-sm ${project.imageOrder}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-all duration-700 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className={`md:col-span-4 flex flex-col justify-between h-full pt-4 md:pt-0 ${project.textOrder}`}>
                      <div>
                        <div className="border-b border-[#333] pb-4 mb-6 flex justify-between text-xs text-[#666] uppercase tracking-widest">
                           <span>{project.category}</span>
                        </div>
                        <h3 className="font-display text-4xl font-bold uppercase text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                        <p className="text-[#a0a0a0] mb-8 leading-relaxed text-lg">{project.description}</p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs text-[#888] uppercase tracking-wider mb-10">
                          {project.tags.map(tag => (
                            <span key={tag} className="border border-[#333] px-4 py-1.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-6">
                          {project.links.map((link, i) => (
                            <a key={i} href={link.url} target={link.url.startsWith('http') ? "_blank" : "_self"} rel={link.url.startsWith('http') ? "noopener noreferrer" : ""} className="inline-flex items-center gap-2 text-sm text-white hover:text-[#d95c14] transition-colors group/link uppercase tracking-wider font-medium">
                              <span className="border-b border-white group-hover/link:border-[#d95c14] pb-1">{link.text}</span> 
                              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'prototypes' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 overflow-hidden bg-[#111] relative rounded-sm aspect-video md:order-1">
                  <iframe 
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/LWqmYMB1hOw" 
                    title="FPS Project Prototype" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="md:col-span-4 flex flex-col justify-between h-full pt-4 md:pt-0 md:order-2">
                  <div>
                    <div className="border-b border-[#333] pb-4 mb-6 flex justify-between text-xs text-[#666] uppercase tracking-widest">
                       <span>FPS Prototype</span>
                    </div>
                    <h3 className="font-display text-4xl font-bold uppercase text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">FPS Project</h3>
                    <p className="text-[#a0a0a0] mb-8 leading-relaxed text-lg">An early first-person shooter prototype exploring core movement, weapon mechanics, and level design.</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs text-[#888] uppercase tracking-wider mb-10">
                      <span className="border border-[#333] px-4 py-1.5 rounded-full">Combat Systems</span>
                      <span className="border border-[#333] px-4 py-1.5 rounded-full">VFX</span>
                      <span className="border border-[#333] px-4 py-1.5 rounded-full">Character Controllers</span>
                    </div>
                    <div className="flex flex-wrap gap-6">
                      <a href="https://youtu.be/LWqmYMB1hOw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white hover:text-[#d95c14] transition-colors group/link uppercase tracking-wider font-medium">
                        <span className="border-b border-white group-hover/link:border-[#d95c14] pb-1">Watch on YouTube</span> 
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>

      <footer className="border-t border-[#333] p-8 md:px-12 flex items-center justify-center gap-4 relative z-10 bg-[#0a0a0a]">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-10 h-10 rounded-full overflow-hidden border border-white/5 grayscale"
        >
          <img 
            src={me} 
            alt="Faisal Azizi" 
            className="w-full h-full object-cover mix-blend-screen"
            style={{
              maskImage: 'radial-gradient(circle, black 30%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 85%)'
            }}
          />
        </motion.div>
        <p className="text-[10px] md:text-xs text-[#555] uppercase tracking-[0.4em] font-medium">
          © {new Date().getFullYear()} LUMIN // FAISAL AZIZI
        </p>
      </footer>
    </div>
  );
}

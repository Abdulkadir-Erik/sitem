"use client";

import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Cpu, 
  Code2, 
  Server, 
  Briefcase, 
  GraduationCap, 
  Terminal,
  Database,
  Shield,
  Send,
  FolderOpen
} from "lucide-react";
import Link from "next/link";

const techStack = [
  { category: "Software & Frameworks", icon: <Code2 className="w-6 h-6" />, items: ["C#", "ASP.NET Core", "Next.js", "Flutter", "RESTful APIs", "JavaScript", "DevExpress", "Xamarin"] },
  { category: "Hardware & Embedded", icon: <Cpu className="w-6 h-6" />, items: ["NRF24", "ESP32", "SPI", "CAN bus", "Modbus TCP/IP", "Microprocessor PCB Design", "Arduino", "PIC CCS"] },
  { category: "Systems & Cloud", icon: <Server className="w-6 h-6" />, items: ["Windows Server", "Active Directory", "Hyper-V", "IIS", "Network Security", "Firewall", "VPN"] }
];

const projects = [
  {
    title: "Wireless Crane Remote Control",
    description: "End-to-end hardware and software production using NRF24 communication, CAN bus, TCP/IP, and Hyper-V virtualization.",
    tags: ["NRF24", "CAN bus", "TCP/IP", "Hyper-V", "PCB"],
  },
  {
    title: "Fast Sales (POS) Applications",
    description: "High-performance Point of Sale solutions designed for speed and reliability in retail environments.",
    tags: ["C#", ".NET", "Desktop", "POS"],
  },
  {
    title: "ERP Integrations",
    description: "Seamless enterprise data sync utilizing Netsis NetOpenX DLL and Atiker ERP systems for business automation.",
    tags: ["Netsis", "NetOpenX", "Atiker ERP", "SQL Server"],
  },
  {
    title: "Custom Mobile & CMS Solutions",
    description: "Production tracking, BPMN workflow automation, and custom management systems built from the ground up.",
    tags: ["Flutter", "Dart", "BPMN", "Mobile"],
  },
  {
    title: "Enterprise Web Applications",
    description: "Advanced corporate platforms developed with modern stacks to ensure scalability and ultra-fast performance.",
    tags: ["Next.js", "React", "Sanity CMS", "Tailwind"],
  }
];
 
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-neon/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">Abdulkadir<span className="text-emerald-neon">.</span></span>
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 font-medium">
            <Link href="#about" className="hover:text-emerald-neon transition-colors">About</Link>
            <Link href="#tech" className="hover:text-emerald-neon transition-colors">Stack</Link>
            <Link href="#projects" className="hover:text-emerald-neon transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-emerald-neon transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-neon/10 text-emerald-neon text-sm mb-6 border border-emerald-neon/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-neon"></span>
            </span>
            Available for New Projects & Consulting
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Senior .NET & Systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-neon to-cyan-500">
              Development Specialist
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Bridging the gap between hardware-level communication (IoT, Embedded, Modbus/CANBUS) and enterprise software systems (.NET Core, Next.js, Flutter).
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#tech" className="px-6 py-3 bg-emerald-neon text-black font-semibold rounded-lg hover:bg-emerald-neon/90 transition-all flex items-center gap-2">
              Tech Stack <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="#contact" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="text-emerald-neon w-8 h-8" /> End-to-End Engineering
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                My expertise spans the entire technology stack. From designing microprocessor PCBs and programming industrial protocols (Modbus, CANBUS, ESP32) to architecting robust enterprise applications using .NET Core, Next.js, and Flutter.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I focus on delivering business impact through technology—whether it's building efficiency analysis tools, comprehensive reporting dashboards, or managing secure enterprise systems architectures. I believe in writing code that solves real-world hardware and software challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-center">
                <span className="text-4xl font-bold text-emerald-neon mb-2">10+</span>
                <span className="text-sm text-zinc-400">Years Experience</span>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-center">
                <span className="text-4xl font-bold text-emerald-neon mb-2">Multi</span>
                <span className="text-sm text-zinc-400">Disciplinary Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack & Competencies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((stack, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-emerald-neon/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-neon mb-6 group-hover:scale-110 transition-transform">
                {stack.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 text-sm text-zinc-300 rounded-lg border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <FolderOpen className="text-emerald-neon w-8 h-8" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-background border border-white/5 rounded-3xl hover:border-emerald-neon/30 transition-colors flex flex-col h-full group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-neon transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-xs text-zinc-300 rounded-lg border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something <span className="text-emerald-neon">Together</span></h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Whether you need help with IoT integrations, enterprise software architecture, or custom web/mobile applications, I'm here to help turn your ideas into robust solutions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:bilgi@abdulkadirerik.com" className="flex items-center gap-4 text-zinc-300 hover:text-emerald-neon transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-emerald-neon/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium">bilgi@abdulkadirerik.com</div>
                </div>
              </a>
              <a href="tel:+905071221355" className="flex items-center gap-4 text-zinc-300 hover:text-emerald-neon transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-emerald-neon/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Phone</div>
                  <div className="font-medium">+90 (507) 122 13 55</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-zinc-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-emerald-neon/10 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium">Konya, Turkey</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-neon/50 focus:ring-1 focus:ring-emerald-neon/50 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-neon/50 focus:ring-1 focus:ring-emerald-neon/50 transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-neon/50 focus:ring-1 focus:ring-emerald-neon/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-white text-black hover:bg-emerald-neon font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Abdulkadir Erik. All rights reserved.</p>
      </footer>
    </div>
  );
}

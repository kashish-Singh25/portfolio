
import { motion } from "framer-motion";
import Scene from "./Scene";
import Journey from "./Journey";
import Cursor from "./Cursor";
import TechStack from "./TechStack";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Terminal,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";


const projects = [
  {
    number: "01",
    name: "SkillSync AI",
    category: "AI / Full Stack Development",
    description:
      "An AI-powered recruitment platform that analyzes resumes and connects candidates with relevant job opportunities through semantic matching.",
    features: [
      {
        title: "AI Resume Analysis",
        detail: "LLM-powered resume evaluation and improvement suggestions.",
      },
      {
        title: "Semantic Job Matching",
        detail: "Embedding-based matching using cosine similarity.",
      },
      {
        title: "Role-based Dashboards",
        detail: "Separate workflows for Students, Professionals and HR.",
      },
    ],
    tech: ["React", "Node.js", "MongoDB", "OpenRouter"],
    demo: "https://skillsync-ai-2-nfh0.onrender.com/",
    github: "https://github.com/kashish-Singh25/skillsync-ai",
  },
  {
    number: "02",
    name: "Helios Lab",
    category: "Virtual IoT Laboratory",
    description:
      "An interactive virtual laboratory designed to help users explore IoT components and experiment with connected systems.",
    features: [
      {
        title: "Virtual IoT Workspace",
        detail: "Explore an interactive browser-based laboratory.",
      },
      {
        title: "Component Exploration",
        detail: "Work with virtual boards, sensors and actuators.",
      },
      {
        title: "Simulation Experience",
        detail: "Experiment with connected IoT systems virtually.",
      },
    ],
    tech: ["React", "JavaScript", "IoT", "Simulation"],
    demo: "https://helioslab-five.vercel.app/",
    github: "https://github.com/kashish-Singh25",
  },
  {
    number: "03",
    name: "RestroSphere",
    category: "Web Development",
    description:
      "A restaurant-focused digital platform designed to simplify restaurant operations and improve the user experience.",
    features: [
      {
        title: "Restaurant-focused Platform",
        detail: "A digital solution built around restaurant needs.",
      },
      {
        title: "User Experience",
        detail: "A user-focused interface for interacting with the platform.",
      },
      {
        title: "Digital Operations",
        detail: "Designed to simplify restaurant-related workflows.",
      },
    ],
    tech: ["React", "JavaScript", "Web Technologies"],
    demo: "https://restrosphere-1.onrender.com/",
    github: "https://github.com/kashish-Singh25",
  },
  {
    number: "04",
    name: "Fake News Detection",
    category: "Machine Learning / NLP",
    description:
      "A machine learning project that uses natural language processing to classify news content as real or fake.",
    features: [
      {
        title: "Text Preprocessing",
        detail: "Prepare and clean news text for analysis.",
      },
      {
        title: "TF-IDF Vectorization",
        detail: "Convert text into numerical features.",
      },
      {
        title: "ML Classification",
        detail: "Use machine learning models to classify news.",
      },
    ],
    tech: ["Python", "NLP", "TF-IDF", "Scikit-learn"],
    demo: null,
    github: "https://github.com/kashish-Singh25/Fake-News-Detection",
  },
];


const skills = [
  "C++", "JavaScript", "Python", "React.js",
  "Node.js", "Express.js", "MongoDB", "SQL",
  "Git & GitHub", "Machine Learning", "NLP", "REST APIs",
];

function App() {
  return (
    <div className="portfolio">
      <Cursor />
      <nav className="navbar">
        <a className="logo" href="#home">K<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#journey">Journey</a>
        </div>
        <a className="nav-button" href="#contact">Let's Talk <ArrowUpRight size={16}/></a>
      </nav>

      <main>
        <section className="hero section" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability">
              <span className="status-dot"/> OPEN TO OPPORTUNITIES
            </div>
            <p className="eyebrow">HELLO, I'M KASHISH SINGH</p>
            <h1>
              Building ideas<br />
              into <span>digital</span><br />
              experiences.
            </h1>
            <p className="hero-description">
              Computer Science student, developer and technology enthusiast.
              I enjoy building practical applications and exploring the world
              of AI, software development and problem solving.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore my work <ArrowUpRight size={18}/>
              </a>
              <a className="secondary-button" href="#contact">Get in touch</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/kashish-Singh25" target="_blank" rel="noreferrer"><FaGithub/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
              <a href="mailto:your-email@example.com"><Mail/></a>
            </div>
          </motion.div>

          {/* <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="visual-glow"/>
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots"><i/><i/><i/></div>
                <span>developer.js</span>
                <Terminal size={15}/>
              </div>
              <div className="code-content">
                <p><span className="line">01</span> <span className="purple">const</span> developer = {"{"}</p>
                <p><span className="line">02</span> &nbsp; name: <span className="green">"Kashish"</span>,</p>
                <p><span className="line">03</span> &nbsp; role: <span className="green">"Developer"</span>,</p>
                <p><span className="line">04</span> &nbsp; passion: <span className="green">"Building"</span>,</p>
                <p><span className="line">05</span> &nbsp; learning: <span className="green">true</span>,</p>
                <p><span className="line">06</span> &nbsp; skills: [<span className="orange">"Code"</span>, <span className="orange">"Create"</span>]</p>
                <p><span className="line">07</span> {"}"};</p>
                <br/>
                <p><span className="line">08</span> <span className="purple">while</span> (alive) {"{"}</p>
                <p><span className="line">09</span> &nbsp; keepBuilding();</p>
                <p><span className="line">10</span> {"}"}</p>
              </div>
              <div className="window-footer"><span/> Available for new challenges</div>
            </div>
            <div className="floating-card"><Sparkles size={18}/> Turning coffee into code</div>
          </motion.div> */}


<motion.div
  className="hero-visual"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
>
  <div className="visual-3d-bg">
    <Scene />
  </div>

  <div className="code-window">
    <div className="window-top">
      <div className="window-dots"><i/><i/><i/></div>
      <span>developer.js</span>
      <Terminal size={15}/>
    </div>

    <div className="code-content">
      <p><span className="line">01</span> <span className="purple">const</span> developer = {"{"}</p>
      <p><span className="line">02</span> &nbsp; name: <span className="green">"Kashish"</span>,</p>
      <p><span className="line">03</span> &nbsp; role: <span className="green">"Developer"</span>,</p>
      <p><span className="line">04</span> &nbsp; passion: <span className="green">"Building"</span>,</p>
      <p><span className="line">05</span> &nbsp; learning: <span className="green">true</span>,</p>
      <p><span className="line">06</span> &nbsp; skills: [<span className="orange">"Code"</span>, <span className="orange">"Create"</span>]</p>
      <p><span className="line">07</span> {"}"};</p>
      <br/>
      <p><span className="line">08</span> <span className="purple">while</span> (alive) {"{"}</p>
      <p><span className="line">09</span> &nbsp; keepBuilding();</p>
      <p><span className="line">10</span> {"}"}</p>
    </div>

    <div className="window-footer">
      <span/> Available for new challenges
    </div>
  </div>

  <div className="floating-card">
    <Sparkles size={18}/> Turning coffee into code
  </div>
</motion.div>

          <a href="#about" className="scroll-indicator"><ChevronDown size={18}/> SCROLL TO EXPLORE</a>
        </section>
        <TechStack />

        
<section className="section about-section" id="about">
  <div className="about-layout">
    <div className="about-left">
      <p className="eyebrow">01 / ABOUT ME</p>
      <h2>
        Curious mind.<br />
        <span>Creative builder.</span>
      </h2>
      <p className="about-text">
        I'm a Computer Science student passionate about software
        engineering, artificial intelligence and creating technology
        that solves real-world problems. I enjoy experimenting with
        new technologies, building useful applications and turning
        ideas into working products.
      </p>
    </div>

    <div className="about-right">
      <p className="eyebrow">WHAT DRIVES ME</p>

      <div className="about-highlight">
        <span>01</span>
        <div>
          <h3>Building with technology</h3>
          <p>Turning ideas into practical web applications.</p>
        </div>
      </div>

      <div className="about-highlight">
        <span>02</span>
        <div>
          <h3>Exploring AI</h3>
          <p>Learning about machine learning and generative AI.</p>
        </div>
      </div>

      <div className="about-highlight">
        <span>03</span>
        <div>
          <h3>Growing every day</h3>
          <p>Improving my development and problem-solving skills.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="stats">
    <div><strong>04+</strong><span>Projects</span></div>
    <div><strong>12+</strong><span>Technologies</span></div>
    <div><strong>∞</strong><span>Things to learn</span></div>
  </div>
</section>


        
<section className="section skills-section" id="skills">
  <p className="eyebrow">02 / MY TOOLKIT</p>
  <h2>Technologies I <span>work with.</span></h2>
  <p className="skills-intro">
    Tools and technologies I use to build applications and explore new ideas.
  </p>

  <div className="skills-grid">
    {[
      {
        category: "PROGRAMMING",
        items: ["C++", "JavaScript", "Python"],
      },
      {
        category: "FRONTEND",
        items: ["React.js"],
      },
      {
        category: "BACKEND",
        items: ["Node.js", "Express.js", "REST APIs"],
      },
      {
        category: "DATABASE",
        items: ["MongoDB", "SQL"],
      },
      {
        category: "AI & MACHINE LEARNING",
        items: ["Machine Learning", "NLP"],
      },
      {
        category: "DEVELOPER TOOLS",
        items: ["Git", "GitHub"],
      },
    ].map((group, index) => (
      <motion.div
        className="skill-card"
        key={group.category}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
      >
        <span className="skill-number">0{index + 1}</span>
        <h3>{group.category}</h3>
        <div className="skill-tags">
          {group.items.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


        

<section className="section projects-section" id="projects">
  <p className="eyebrow">03 / SELECTED WORK</p>
  <h2>Things I've <span>built.</span></h2>
  <p className="skills-intro">
    A collection of projects where I turn ideas into working applications.
  </p>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <motion.article
        className="project-card"
        key={project.number}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="project-top">
          <span>PROJECT / {project.number}</span>
          <span className="project-index">0{index + 1}</span>
        </div>

        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <div className="featured-details">
          <p className="details-label">KEY FEATURES</p>
          <div className="feature-list">
            {project.features.map((feature, i) => (
              <div key={feature.title}>
                <span>0{i + 1}</span>
                <h4>{feature.title}</h4>
                <p>{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.demo ? (
            <a
              className="project-demo"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              LIVE DEMO <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="demo-unavailable">DEMO UNAVAILABLE</span>
          )}

          <a
            className="project-github"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.article>
    ))}
  </div>
</section>

<Journey />


        
<section className="section contact-section" id="contact">
  <motion.div
    className="contact-container"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="contact-top">
      <span className="eyebrow">05 / LET'S CONNECT</span>
      <span className="contact-status">
        <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
      </span>
    </div>

    <h2>
      Have a vision?
      <br />
      <span>Let's make it real.</span>
    </h2>

    <p className="contact-description">
      Have an interesting idea, an opportunity or just want to connect?
      I'd love to hear from you. Let's create something meaningful together.
    </p>

    <a
      className="contact-main-button"
      href="mailto:kashish23singhhh@gmail.com"
    >
      Let's talk
      <ArrowUpRight size={20} />
    </a>

    <div className="contact-divider" />

    <div className="contact-bottom">
      <div>
        <span className="contact-label">CONNECT WITH ME</span>
        <div className="contact-socials">
          <a href="https://github.com/kashish-Singh25" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub <ArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <span className="contact-location">INDIA · OPEN TO CONNECT</span>
    </div>
  </motion.div>
</section>

      </main>

      <footer>
        <a className="logo" href="#home">K<span>.</span></a>
        <p>Designed & built with curiosity by Kashish Singh © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;

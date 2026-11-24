
import { useState } from "react";
import {
    User, FolderGit2, Code2, Mail, Terminal, X, Monitor,
    FileCode, Award, Activity, Files, Bot, Settings,
    ExternalLink
  } from "lucide-react";
import "./PortfolioOS.css";

const apps = [
  { name: "About.exe", icon: User, type: "about" },
  { name: "Projects.exe", icon: FolderGit2, type: "projects" },
  { name: "Skills.exe", icon: Code2, type: "skills" },
  { name: "Terminal.exe", icon: Terminal, type: "terminal" },
  { name: "Contact.exe", icon: Mail, type: "contact" },
  { name: "Code Studio", icon: FileCode, type: "code" },
  { name: "Achievements", icon: Award, type: "achievements" },
  { name: "System Monitor", icon: Activity, type: "monitor" },
  { name: "File Explorer", icon: Files, type: "files" },
  { name: "AI Assistant", icon: Bot, type: "ai" },
  { name: "Settings", icon: Settings, type: "settings" },
];

const projectLinks = [
  { name: "SkillSync AI", url: "https://github.com/kashish-Singh25/skillsync-ai" },
  { name: "Fake News Detection", url: "https://github.com/kashish-Singh25/Fake-News-Detection" },
  { name: "GitHub Profile", url: "https://github.com/kashish-Singh25" },
];

function AppContent({ type, animations }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const responses = {
    skills: "Kashish works with C++, JavaScript, Python, React, Node.js, Express, MongoDB, SQL and AI/ML.",
    projects: "Featured projects include SkillSync AI, Helios Lab, RestroSphere and Fake News Detection.",
    about: "Kashish Singh is a Computer Science student interested in software development, AI and building practical applications.",
    contact: "You can contact Kashish at kashish23singhhh@gmail.com."
  };

  const askAssistant = () => {
    const q = question.toLowerCase();
    if (q.includes("skill") || q.includes("tech")) setAnswer(responses.skills);
    else if (q.includes("project")) setAnswer(responses.projects);
    else if (q.includes("contact") || q.includes("email")) setAnswer(responses.contact);
    else if (q.includes("about") || q.includes("who")) setAnswer(responses.about);
    else setAnswer("Try asking about Kashish's skills, projects, background or contact details.");
  };

  switch (type) {
    case "about":
      return <><h3>USER PROFILE</h3><p>Hello! I'm Kashish Singh, a Computer Science student and developer. I enjoy building practical applications and exploring AI and software development.</p></>;

    case "projects":
      return <><h3>PROJECT DIRECTORY</h3><p>Explore my featured work:</p>{projectLinks.map(p => <a className="os-file-link" href={p.url} target="_blank" rel="noreferrer" key={p.name}>{p.name} <ExternalLink size={13}/></a>)}</>;

    case "skills":
      return <><h3>TECH STACK</h3><div className="os-tags">{["C++", "JavaScript", "Python", "React", "Node.js", "Express", "MongoDB", "SQL", "AI / ML", "Git", "GitHub"].map(s => <span key={s}>{s}</span>)}</div></>;

    case "terminal":
      return <><h3>TERMINAL ACCESS</h3><p>Explore the interactive terminal section on the main portfolio page. Try commands like help, skills, projects and clear.</p><a className="os-file-link" href="#terminal">Open Terminal Section <ExternalLink size={13}/></a></>;

    case "contact":
      return <><h3>ESTABLISH CONNECTION</h3><p>Have an opportunity or project in mind?</p><a className="os-file-link" href="mailto:kashish23singhhh@gmail.com">kashish23singhhh@gmail.com <ExternalLink size={13}/></a></>;

    case "code":
      return <><h3>CODE STUDIO</h3><p className="os-code-label">PROFILE.JS</p><pre className="os-code">{`const developer = {
  name: "Kashish Singh",
  interests: ["AI", "Web Development"],
  stack: ["React", "Node.js", "Python"],
  mindset: "Always learning"
};`}</pre></>;

    case "achievements":
      return <><h3>ACHIEVEMENT CENTER</h3><div className="os-info-row"><Award/><span>GenAI Summer Internship</span></div><div className="os-info-row"><Award/><span>Machine Learning Internship experience</span></div><div className="os-info-row"><Award/><span>Web Development Internship selection</span></div><p className="os-note">More milestones and certifications can be added here.</p></>;

    case "monitor":
      return <><h3>SYSTEM OVERVIEW</h3><div className="os-stats"><div><strong>04</strong><span>Featured Projects</span></div><div><strong>11</strong><span>OS Applications</span></div><div><strong>ONLINE</strong><span>Portfolio Status</span></div></div><p className="os-note">A snapshot of the portfolio workspace.</p></>;

    case "files":
      return <><h3>FILE EXPLORER</h3><div className="os-folder">📁 Projects</div>{projectLinks.map(p => <a className="os-file-link" href={p.url} target="_blank" rel="noreferrer" key={p.name}>{p.name} <ExternalLink size={13}/></a>)}<div className="os-folder">📁 Resume & Certificates</div><p className="os-note">Resume and certificate files can be added here once uploaded.</p></>;

    case "ai":
      return <><h3>ASK KASHISH AI</h3><p className="os-note">A mini portfolio guide. Ask about skills, projects, background or contact.</p><div className="os-ai-input"><input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && askAssistant()} placeholder="Ask something..."/><button onClick={askAssistant}>ASK</button></div>{answer && <p className="os-ai-answer">{answer}</p>}</>;

    case "settings":
      return <><h3>SYSTEM SETTINGS</h3><label className="os-setting"><span>Window animations</span><input type="checkbox" checked={animations} onChange={() => {}} disabled /></label><p className="os-note">Display preferences will be expanded in the next update.</p></>;

    default:
      return <p>Application loading...</p>;
  }
}

export default function PortfolioOS() {
  const [activeApp, setActiveApp] = useState(null);
  const [animations] = useState(true);

  return (
    <section className="os-section" id="portfolio-os">
      <div className="os-heading">
        <span className="eyebrow">07 / SYSTEM EXPERIENCE</span>
        <h2>Welcome to <span>Kashish OS.</span></h2>
        <p>A little operating system. A lot about me.</p>
      </div>

      <div className="os-desktop">
        <div className="os-topbar">
          <span><Monitor size={15}/> KASHISH OS</span>
          <span>SYSTEM ONLINE</span>
        </div>

        <div className="os-icons">
          {apps.map(app => {
            const Icon = app.icon;
            return (
              <button className="os-app" key={app.type} onClick={() => setActiveApp(app)}>
                <Icon size={27}/>
                <span>{app.name}</span>
              </button>
            );
          })}
        </div>

        {activeApp && (
          <div className="os-window">
            <div className="os-window-bar">
              <span>{activeApp.name}</span>
              <button onClick={() => setActiveApp(null)} aria-label="Close window"><X size={17}/></button>
            </div>
            <div className="os-window-content">
              <AppContent type={activeApp.type} animations={animations}/>
            </div>
          </div>
        )}

        <div className="os-taskbar">
          <span>KASHISH OS</span>
          <span>v2.0 — ONLINE</span>
        </div>
      </div>
    </section>
  );
}

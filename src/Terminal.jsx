
import { useState } from "react";
import "./Terminal.css";

const commands = {
  help: [
    "Available commands:",
    "about     - Know about me",
    "skills    - View my technical skills",
    "projects  - Explore my projects",
    "contact   - Get in touch",
    "github    - Visit my GitHub",
    "clear     - Clear terminal",
  ],
  about: [
    "Hello! I'm Kashish Singh.",
    "A Computer Science student and developer.",
    "I enjoy building practical applications",
    "and exploring AI and software development."
  ],
  skills: [
    "Programming: C++, JavaScript, Python",
    "Frontend: React.js",
    "Backend: Node.js, Express.js, REST APIs",
    "Database: MongoDB, SQL",
    "AI/ML: Machine Learning, NLP",
    "Tools: Git, GitHub"
  ],
  projects: [
    "01. SkillSync AI",
    "02. Helios Lab",
    "03. RestroSphere",
    "04. Fake News Detection"
  ],
  contact: [
    "Let's connect!",
    "Scroll to the Contact section to get in touch."
  ],
  github: [
    "Opening GitHub profile..."
  ],
  whoami: [
    "visitor@kashish",
    "Welcome to my interactive portfolio terminal!"
  ]
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { command: "welcome", output: [
      "Welcome to Kashish's terminal!",
      "Type 'help' to see available commands."
    ]}
  ]);

  const runCommand = (e) => {
    e.preventDefault();

    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[cmd] || [
      `Command not found: ${cmd}`,
      "Type 'help' to see available commands."
    ];

    setHistory((prev) => [...prev, { command: cmd, output }]);

    if (cmd === "github") {
      window.open(
        "https://github.com/kashish-Singh25",
        "_blank",
        "noopener,noreferrer"
      );
    }

    setInput("");
  };

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-heading">
        <span className="eyebrow">06 / INTERACTIVE EXPERIENCE</span>
        <h2>Explore through <span>Terminal.</span></h2>
        <p>Curious? Type a command and discover more about me.</p>
      </div>

      <div className="terminal-box">
        <div className="terminal-top">
          <div className="terminal-dots">
            <i /><i /><i />
          </div>
          <span>KASHISH_TERMINAL — BASH</span>
          <span>v1.0</span>
        </div>

        <div className="terminal-body">
          {history.map((item, index) => (
            <div className="terminal-entry" key={index}>
              <div className="terminal-command">
                <span>visitor@kashish:~$</span> {item.command}
              </div>
              {item.output.map((line, i) => (
                <p className="terminal-output" key={i}>{line}</p>
              ))}
            </div>
          ))}

          <form onSubmit={runCommand} className="terminal-input-line">
            <span>visitor@kashish:~$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
            />
            <button type="submit">RUN ↵</button>
          </form>
        </div>
      </div>
    </section>
  );
}

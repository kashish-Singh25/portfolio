
import { motion } from "framer-motion";
import "./TechStack.css";

const rowOne = [
  "C++", "JavaScript", "Python", "React.js",
  "Node.js", "Express.js", "MongoDB", "SQL",
];

const rowTwo = [
  "Machine Learning", "NLP", "REST APIs",
  "Git", "GitHub", "Generative AI", "Three.js",
];

function TechRow({ items, reverse = false }) {
  return (
    <div className="tech-marquee">
      <motion.div
        className="tech-track"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items, ...items, ...items].map((tech, index) => (
          <div className="tech-item" key={`${tech}-${index}`}>
            <span className="tech-dot" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <p className="eyebrow">MY TECHNOLOGIES</p>
      <h2>Tools behind <span>my ideas.</span></h2>
      <p className="tech-stack-intro">
        Constantly learning, experimenting and building with technology.
      </p>

      <div className="tech-marquee-wrapper">
        <TechRow items={rowOne} />
        <TechRow items={rowTwo} reverse />
      </div>
    </section>
  );
}

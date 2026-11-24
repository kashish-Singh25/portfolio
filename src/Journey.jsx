
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  BriefcaseBusiness,
  Cpu,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import "./Journey.css";

const milestones = [
  {
    year: "2021",
    category: "EDUCATION",
    title: "Class 10th",
    description:
      "Completed my secondary education and built the foundation for my academic journey.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    category: "EDUCATION & ACHIEVEMENT",
    title: "Class 12th & Science Exhibition",
    description:
      "Completed senior secondary education and won at the Zonal Level Science Exhibition.",
    icon: Trophy,
    highlight: "ZONAL LEVEL WINNER",
  },
  {
    year: "2024",
    category: "NEW BEGINNING",
    title: "Started My College Journey",
    description:
      "Began my Computer Science journey, exploring programming, problem-solving and technology.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    category: "HACKATHON",
    title: "Smart India Hackathon",
    description:
      "Participated in SIH, collaborating with a team to explore innovative solutions to real-world problems.",
    icon: Cpu,
    highlight: "SIH 2025",
  },
  {
    year: "2026",
    category: "HACKATHON",
    title: "Shark Tank Hackathon",
    description:
      "Presented an innovative project idea and secured a place among the Top 10 teams.",
    icon: Trophy,
    highlight: "TOP 10 ACHIEVEMENT",
  },
  {
    year: "EXPERIENCE",
    category: "INTERNSHIPS & LEARNING",
    title: "Growing Through Experience",
    description:
      "Exploring professional development through Generative AI, Machine Learning and Web Development internships, along with a Generative AI course.",
    icon: BriefcaseBusiness,
    highlight: "LEARN · BUILD · GROW",
  },
  {
    year: "PRESENT",
    category: "THE JOURNEY CONTINUES",
    title: "Building What's Next",
    description:
      "Creating projects, exploring new technologies and turning ideas into meaningful digital experiences.",
    icon: Rocket,
    highlight: "ALWAYS BUILDING",
  },
];

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">

        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="journey-eyebrow">
            <Sparkles size={15} /> MY STORY SO FAR
          </span>

          <h2>
            The Journey <span>So Far.</span>
          </h2>

          <p>
            Every milestone, every challenge and every experience
            has shaped the developer I am becoming.
          </p>
        </motion.div>

        <div className="journey-timeline">
          <div className="journey-line" />

          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className={`journey-item ${
                  index % 2 === 0 ? "journey-left" : "journey-right"
                }`}
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.08 }}
              >
                <div className="journey-node">
                  <Icon size={19} />
                </div>

                <div className="journey-card">
                  <div className="journey-card-top">
                    <span className="journey-category">
                      {item.category}
                    </span>
                    <span className="journey-year">
                      {item.year}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  {item.highlight && (
                    <span className="journey-highlight">
                      <Trophy size={13} />
                      {item.highlight}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="journey-ending"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Code2 size={22} />
          <span>THE JOURNEY CONTINUES...</span>
          <div className="journey-ending-glow" />
        </motion.div>

      </div>
    </section>
  );
}

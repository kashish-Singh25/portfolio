
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="loader-logo">
              K<span>.</span>
            </div>

            <h2>KASHISH SINGH</h2>
            <p>BUILDING DIGITAL EXPERIENCES</p>

            <div className="loader-bar">
              <motion.div
                className="loader-progress"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <span className="loader-caption">INITIALIZING EXPERIENCE...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

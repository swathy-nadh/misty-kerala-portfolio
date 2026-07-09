import { motion } from "framer-motion";
import Leaf from "../../effects/Leaf/Leaf";
function ScrollIndicator() {
  return (
    <div className="mt-24 flex flex-col items-center gap-3">
      <div className="text-2xl">
        <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl"  
        >
                <div className="mb-2">
                  <Leaf />
                </div>
                
        </motion.div>
      </div>

      <p className="text-sm uppercase tracking-[0.35em] text-[var(--moss)]">
        Scroll Slowly
      </p>
    </div>
  );
}

export default ScrollIndicator;
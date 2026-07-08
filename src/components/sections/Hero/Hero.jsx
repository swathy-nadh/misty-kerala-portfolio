import Container from "../../ui/Container/Container";
import ScrollIndicator from "../../ui/ScrollIndicator/ScrollIndicator.jsx";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

         <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.5em] text-[var(--moss)]"
          >
              The Quiet Developer
          </motion.p>

          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
              delay: 0.8,
              duration: 0.8,
               }}
             className="mt-4 text-lg italic text-[var(--moss)]"
          >
           by
          </motion.p>

          <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
              }}
              className="mt-2 text-7xl font-normal text-[var(--forest)]"
           >
              Swathy
            </motion.h1>

          <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 1,
                  }}
                  className="mx-auto mt-10 max-w-xl text-xl leading-9 text-[var(--earth)]"
          >
              Building thoughtful software inspired by the calm of Kerala.
          </motion.p>

          <ScrollIndicator />

        </div>
      </Container>
    </section>
  );
}

export default Hero;
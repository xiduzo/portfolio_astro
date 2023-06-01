import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export const PageTransition: FC<Props> = ({ background }) => {
  const [entryAnimation, setEntryAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEntryAnimation(false);
    }, 600);
  }, []);

  return (
    <AnimatePresence>
      {entryAnimation && (
        <section className="fixed top-0 bottom-0 z-40 w-full">
          <motion.div
            className="fixed top-0 bottom-0 w-full bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
          <motion.div
            className="fixed top-0 bottom-0 w-full"
            initial={{ top: "100vh", bottom: "0vh", opacity: 1 }}
            animate={{ top: "0vh" }}
            transition={{ duration: 0.25, delay: 0 }}
            exit={{ bottom: "100vh" }}
            style={{ background }}
          />
        </section>
      )}
    </AnimatePresence>
  );
};

type Props = {
  background: string;
};

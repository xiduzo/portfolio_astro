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
        <section className="z-40 fixed w-full bottom-0 top-0">
          <motion.div
            className="bg-white fixed w-full bottom-0 top-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
          <motion.div
            className="fixed w-full bottom-0 top-0"
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

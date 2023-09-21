import { AnimatePresence, motion } from "framer-motion";
import { type FC, useEffect, useState } from "react";

export const PageTransition: FC<Props> = ({ background }) => {
  const [entryAnimation, setEntryAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEntryAnimation(false);
    }, 350);
  }, []);

  return (
    <AnimatePresence>
      {entryAnimation && (
        <section className="fixed top-0 bottom-0 z-20 w-full">
          <motion.div className="hidden motion-reduce:block fixed w-full"
            initial={{ top: 0, bottom: 0, opacity: 1 }}
            exit={ {opacity: 0 }}
            transition={{ duration: 0.8 }}

            style={{ background }}
          />
          <motion.div
            className="fixed w-full bg-slate-100 dark:bg-zinc-950 motion-reduce:hidden"
            initial={{ opacity: 1, bottom: 0, top: 0 }}
            animate={{ bottom: "100vh" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.25 }}
          />
          <motion.div
            className="fixed w-full motion-reduce:hidden"
            initial={{ top: "100vh", bottom: 0, opacity: 1 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.25 }}
            exit={ { bottom: "100vh" }}
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

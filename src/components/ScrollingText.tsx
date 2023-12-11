import { motion } from "framer-motion";
import { type FC, useEffect, useState } from "react";
import { userPrefersReducedMotion } from "../hooks/userPrefersReducedMotion";

// TODO check if we can make this an astro component as well
export const ScrollingText: FC<Props> = ({
  background,
  text,
  direction = "left",
}) => {
  const [offset, setOffset] = useState(0);

  const reduceMotion = userPrefersReducedMotion()

  useEffect(() => {
    const listener = () => {
      if (direction === "right") {
        const pxToBottom =
          document.documentElement.scrollHeight -
          window.pageYOffset -
          window.innerHeight;
        setOffset(-pxToBottom / 2);
        return;
      }

      const scrollOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      setOffset(-scrollOffset * (reduceMotion ? 0.5 : 1.5));
    };

    document.addEventListener("scroll", listener);
    document.addEventListener("touchMove", listener);
  }, [direction, reduceMotion]);

  return (
    <section
      aria-hidden="true"
      className="flex items-end w-full -mt-20 overflow-hidden uppercase h-96"
      style={{ background }}
    >
      <motion.div
        className="relative whitespace-nowrap text-9xl translate-y-10 lg:text-[256px] font-extrabold tracking-widest lg:translate-y-20 space-x-32"
        initial={{ opacity: reduceMotion ? 1:0, left: "0vw" }}
        animate={{ opacity: 1, left: reduceMotion ? "0vw" : "-5vw" }}
        transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.45 }}
        style={{ marginLeft: offset + "px" }}
      >
        {Array.from({ length: 60 }).map((_, index) => (
          <span key={index}>{text}</span>
        ))}
      </motion.div>
    </section>
  );
};

type Props = {
  background?: string;
  text: string;
  direction?: "left" | "right";
};

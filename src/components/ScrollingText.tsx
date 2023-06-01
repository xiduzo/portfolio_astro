import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export const ScrollingText: FC<Props> = ({
  background,
  text,
  direction = "left",
}) => {
  const [offset, setOffset] = useState(0);
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
      setOffset(-scrollOffset * 1.5);
    };

    document.addEventListener("scroll", listener);
    document.addEventListener("touchMove", listener);
  }, [direction]);

  return (
    <section
      aria-hidden="true"
      className="flex items-end w-full -mt-20 overflow-hidden uppercase h-96 bg-slate-100"
      style={{ background }}
    >
      <motion.div
        className="relative whitespace-nowrap text-9xl translate-y-10 lg:text-[256px] font-extrabold tracking-widest lg:translate-y-20 space-x-32"
        initial={{ opacity: 0, left: "0vw" }}
        animate={{ opacity: 1, left: "-5vw" }}
        transition={{ duration: 0.3, delay: 0.8 }}
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

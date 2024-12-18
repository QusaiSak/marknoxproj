import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // This option determines whether the animation runs only once.
  });

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -75,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return { ref, isInView, variants };
};

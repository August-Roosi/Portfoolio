import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useNavigationStore } from "../navigationStore";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  const direction = useNavigationStore((state) => state.direction);
  const setIsNavigating = useNavigationStore((state) => state.setIsNavigating);
  const directionChanged = useNavigationStore((state) => state.directionChanged);

  const variants = {
    enter: (dir: number) => ({
      x:  1000 * dir,
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: -2000 * dir,
      transition: { duration: directionChanged ? 0.8 : 0.5 },
      opacity: 1,
    })
  };


  return (
      <motion.div
      onAnimationStart={() => setIsNavigating(true)}
      onAnimationComplete={() => setIsNavigating(false)}

      key={location.pathname}
      variants={variants}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: direction == 0 ? 0.5 : 0.3, ease: "easeInOut" }}
      className="absolute top-10 left-1/8 w-3/4"
      >
        {children}
      </motion.div>
  );
}

export default PageWrapper;
import { animate, motion } from "framer-motion";
import { useRef, type ReactNode} from "react";
import { useNavigationStore } from "../navigationStore";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  const direction = useNavigationStore((state) => state.direction);
  const setIsNavigating = useNavigationStore((state) => state.setIsNavigating);
  const pageRef = useRef<HTMLDivElement>(null);


    function scrollToTop() {
      animate(window.scrollY, 0, {
        type: "spring",
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }


  const variants = {
    enter: (dir: number) => ({
      x:  1800 * dir,
      opacity: direction == 0 ? 0 : 0,
    }),
    center:{
      x: 0,
      y: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: -1800 * dir,
    })
  };


  return (
      <motion.div
      ref={pageRef}
      onAnimationStart={() => {
        setIsNavigating(true);
        scrollToTop();
      }}
      onAnimationComplete={() => {
        setIsNavigating(false);
      }}

      variants={variants}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={ direction == 0 ?{duration: 0.5} :{type:"spring", damping: 40, ease: "easeIn"}}
      className="absolute top-10 left-1/8 w-3/4 z-100"
      >
        {children}
      </motion.div>
  );
}

export default PageWrapper;
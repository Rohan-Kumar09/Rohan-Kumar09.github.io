import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  })
  
  const animations = {
    initial: {
      opacity: 0,
      x: -80,
      y: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animations}
      initial= 'initial'
      animate={inView ? 'animate' : 'initial'}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: 'easeOut'
      }}
      key={inView.toString()}
    >
      {children}
    </motion.div>
  );
};
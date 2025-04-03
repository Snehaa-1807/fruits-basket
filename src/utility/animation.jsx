const FadeUp = (delay = 0, duration = 1) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

const FadeLeft = (delay = 0, duration = 1) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

const FadeRight = (delay = 0, duration = 1) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

const animations = { FadeUp, FadeLeft, FadeRight };

export default animations;

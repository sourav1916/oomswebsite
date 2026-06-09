import { useState, useEffect, useRef } from "react";

export const AnimatedCounter = ({ value, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const isDecimal = value % 1 !== 0;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad formula
      const easedProgress = progress * (2 - progress);
      const currentVal = start + easedProgress * (end - start);

      if (isDecimal) {
        setCount(parseFloat(currentVal.toFixed(2)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="font-heading tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;

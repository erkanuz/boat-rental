import { useEffect, useState } from "react";

interface CountUpParams {
    start: number;
    end: number;
    duration: number;
}

const useCountUp = ({ start, end, duration }: CountUpParams) => {
    const [count, setCount] = useState(start);
  
    useEffect(() => {
      const framesPerSecond = 60;
      const totalFrames = duration / 1000 * framesPerSecond;
      const increment = (end - start) / totalFrames;
      let currentCount = start;
      
      const updateCounter = () => {
        if (currentCount < end) {
          setCount(Math.ceil(currentCount));
          currentCount += increment;
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };
  
      updateCounter();
  
    }, [end, duration, start]);
  
    return count;
};

export default useCountUp;
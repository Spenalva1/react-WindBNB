import { useEffect } from 'react';
import { useState } from 'react';

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return window.addEventListener('resize', handleResize);
  }, []);

  return {
    width,
  };
}

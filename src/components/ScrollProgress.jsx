import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" style={{ width: '0%' }} />;
}

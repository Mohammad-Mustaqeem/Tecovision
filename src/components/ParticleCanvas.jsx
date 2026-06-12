import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ dark = false }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const REPEL = 0.5;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const mobile = canvas.width < 640;
    const COUNT = mobile ? (dark ? 35 : 28) : (dark ? 110 : 90);
    const LINK_DIST = mobile ? 100 : 150;
    const MOUSE_DIST = mobile ? 80 : 130;

    let resizeTimer;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); };
    window.addEventListener('resize', onResize);

    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: 1.3 + Math.random() * 2,
      red: Math.random() < 0.1,
    }));

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    window.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    function tick() {
      animRef.current = requestAnimationFrame(tick);
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of pts) {
        const dx = p.x - mx, dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_DIST * MOUSE_DIST && d2 > 0.1) {
          const d = Math.sqrt(d2);
          const f = (MOUSE_DIST - d) / MOUSE_DIST * REPEL;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx *= 0.965;
        p.vy *= 0.965;
        p.x = ((p.x + p.vx) % W + W) % W;
        p.y = ((p.y + p.vy) % H + H) % H;
      }

      // Edges
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const a = (1 - d / LINK_DIST) * (dark ? 0.22 : 0.55);
            ctx.beginPath();
            ctx.strokeStyle = dark ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
            ctx.lineWidth = dark ? 0.65 : 0.8;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.red ? 'rgba(255,59,59,0.75)' : dark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.5)';
        ctx.fill();
      }
    }
    tick();

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
}

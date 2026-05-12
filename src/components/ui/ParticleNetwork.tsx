"use client";

import { useEffect, useRef } from "react";

/* ── Tuning ─────────────────────────────────────── */
const PARTICLE_COUNT   = 90;
const CONNECTION_DIST  = 130;   // px — particles within this distance get connected
const LINE_MAX_ALPHA   = 0.10;  // max line opacity (very faint)
const BASE_SPEED       = 0.28;  // drift speed — deliberately slow and peaceful

// Dark navy/blue palette — clearly visible on white
const HUES = [221, 217, 234, 199, 226]; // navy, royal-blue, indigo, steel-blue, periwinkle

interface NetParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaDir: number;     // for gentle pulsing
  hue: number;
  saturation: number;
  lightness: number;
}

function buildParticles(w: number, h: number): NetParticle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = BASE_SPEED * (0.4 + Math.random() * 0.9);
    const hue = HUES[Math.floor(Math.random() * HUES.length)];
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 1.4 + 1.0,    // 1.0 – 2.4 px
      alpha: Math.random() * 0.3 + 0.4,      // 0.4 – 0.7
      alphaDir: Math.random() < 0.5 ? 1 : -1,
      hue,
      saturation: 75 + Math.floor(Math.random() * 10), // 75–85%
      lightness:  35 + Math.floor(Math.random() * 10), // 35–45%
    };
  });
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<NetParticle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Completely disable on touch-only devices (phones/tablets)
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      particlesRef.current = buildParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    /* ── Main render loop ───────────────────────── */
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      const pts = particlesRef.current;

      /* 1. Update positions + alpha pulse */
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce at viewport edges
        if (p.x <= 0)  { p.x = 0;  p.vx = Math.abs(p.vx); }
        if (p.x >= w)  { p.x = w;  p.vx = -Math.abs(p.vx); }
        if (p.y <= 0)  { p.y = 0;  p.vy = Math.abs(p.vy); }
        if (p.y >= h)  { p.y = h;  p.vy = -Math.abs(p.vy); }

        // Very gentle alpha pulse (breathe effect)
        p.alpha += p.alphaDir * 0.003;
        if (p.alpha > 0.72) { p.alpha = 0.72; p.alphaDir = -1; }
        if (p.alpha < 0.28) { p.alpha = 0.28; p.alphaDir =  1; }
      }

      /* 2. Draw connecting lines between nearby particles */
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            // Linearly fade opacity with distance
            const a = LINE_MAX_ALPHA * (1 - dist / CONNECTION_DIST);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${a.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      /* 3. Draw particle dots */
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.alpha.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",   // never blocks clicks
        zIndex: 0,               // behind all content, above body background
      }}
    />
  );
}

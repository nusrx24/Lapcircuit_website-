"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  radius: number;
  life: number;
  maxLife: number;
  colorIndex: number;
}

// Visible on white backgrounds — dark blues, navy, indigo
const COLORS = [
  { h: 221, s: 83, l: 37 },  // #1E40AF  dark blue
  { h: 217, s: 91, l: 40 },  // #1D4ED8  royal blue
  { h: 217, s: 91, l: 50 },  // #2563EB  medium blue
  { h: 199, s: 89, l: 37 },  // #0369A1  steel blue
  { h: 234, s: 60, l: 35 },  // #312E81  indigo-navy
];

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // ── Disable completely on touch-only devices ──
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Canvas always fills the viewport ──
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // ── Spawn particles on mouse move ──
    const onMouseMove = (e: MouseEvent) => {
      const count = Math.floor(Math.random() * 2) + 2; // 2–3 per event
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length >= 30) break;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.4 + 0.4;
        const life = Math.floor(Math.random() * 35) + 45; // 45–80 frames ≈ 0.75–1.35s

        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // drift slightly upward
          alpha: 0.82,
          radius: Math.random() * 3.5 + 2.5, // 2.5 – 6px
          life,
          maxLife: life,
          colorIndex: Math.floor(Math.random() * COLORS.length),
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Render loop ──
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Physics tick
        p.life--;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.022;  // gentle gravity
        p.vx *= 0.968;  // air resistance
        p.vy *= 0.968;
        p.radius *= 0.988;

        // Fade proportionally to remaining life
        const lifeRatio = p.life / p.maxLife;
        p.alpha = lifeRatio * 0.82;

        // Remove expired particles
        if (p.life <= 0 || p.alpha < 0.01 || p.radius < 0.5) {
          particles.splice(i, 1);
          continue;
        }

        // Draw: solid core + soft glow ring
        const c = COLORS[p.colorIndex];

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
        glow.addColorStop(0,   `hsla(${c.h}, ${c.s}%, ${c.l}%, ${p.alpha * 0.45})`);
        glow.addColorStop(1,   `hsla(${c.h}, ${c.s}%, ${c.l}%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Solid core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${c.h}, ${c.s}%, ${c.l}%, ${p.alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
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
        pointerEvents: "none",
        zIndex: 9999,
        // NO mix-blend-mode — causes invisibility on white backgrounds
      }}
    />
  );
}

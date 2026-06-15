"use client";
import { useEffect, useRef } from "react";

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let t = 0;
    let animId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Mouse tracking
    let mouseX = W / 2;
    let mouseY = H / 2;
    const onMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("mousemove", onMouse);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      hue: number;

      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2 + 0.3;
        this.maxLife = Math.random() * 300 + 150;
        this.life = Math.random() * this.maxLife;
        this.hue = 190 + Math.random() * 40; // cyan~blue range
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2 + 0.3;
        this.maxLife = Math.random() * 300 + 150;
        this.life = 0;
        this.hue = 190 + Math.random() * 40;
      }

      update(t: number) {
        // Noise-like flow field
        const angle = Math.sin(this.x * 0.008 + t * 0.4) * Math.cos(this.y * 0.008 + t * 0.3) * Math.PI * 2;
        this.vx += Math.cos(angle) * 0.012;
        this.vy += Math.sin(angle) * 0.012;

        // Mouse attraction (subtle)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          this.vx += (dx / dist) * 0.06;
          this.vy += (dy / dist) * 0.06;
        }

        // Damping
        this.vx *= 0.96;
        this.vy *= 0.96;

        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Wrap edges
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;

        if (this.life > this.maxLife) this.reset();
      }

      draw(ctx: CanvasRenderingContext2D) {
        const progress = this.life / this.maxLife;
        const opacity = progress < 0.1
          ? progress / 0.1
          : progress > 0.85
          ? (1 - progress) / 0.15
          : 1;

        const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4);
        glow.addColorStop(0, `hsla(${this.hue}, 100%, 75%, ${opacity * 0.9})`);
        glow.addColorStop(0.4, `hsla(${this.hue}, 100%, 60%, ${opacity * 0.3})`);
        glow.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 90%, ${opacity})`;
        ctx.fill();
      }
    }

    // Connection lines between nearby particles
    const drawConnections = (particles: Particle[]) => {
      const maxDist = 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const COUNT = 120;
    const particles = Array.from({ length: COUNT }, () => new Particle());

    const draw = () => {
      // Trail effect — усанд урсаж буй мэт
      ctx.fillStyle = "rgba(5, 5, 20, 0.18)";
      ctx.fillRect(0, 0, W, H);

      drawConnections(particles);
      particles.forEach((p) => {
        p.update(t);
        p.draw(ctx);
      });

      t += 0.01;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
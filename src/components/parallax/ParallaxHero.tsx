"use client";

import { useRef, useEffect, useState } from "react";

interface ParallaxHeroProps {
  totalFrames?: number;
  framesFolder?: string;
  fileExtension?: string;
  filePrefix?: string;
}

export function ParallaxHero({
  totalFrames = 120,
  framesFolder = "/parallax",
  fileExtension = "jpg",
  filePrefix = "ezgif-frame-",
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(-1);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  /* ----------------------------- LOAD IMAGES ----------------------------- */
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const num = String(i).padStart(3, "0");
      img.src = `${framesFolder}/${filePrefix}${num}.${fileExtension}`;
      img.onload = () => {
        loaded++;
        if (loaded === totalFrames) setImagesLoaded(true);
      };
      imgs.push(img);
    }

    setImages(imgs);
  }, [totalFrames, framesFolder, fileExtension, filePrefix]);

  /* ------------------------- SCROLL (RAF SYNCED) -------------------------- */
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const container = containerRef.current!;
        const rect = container.getBoundingClientRect();
        const containerHeight = container.clientHeight;
        const viewportHeight = document.documentElement.clientHeight;

        const scrollRange = containerHeight - viewportHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));

        const frame = Math.min(
          Math.floor(progress * totalFrames),
          totalFrames - 1,
        );

        if (frame !== lastFrameRef.current) {
          lastFrameRef.current = frame;
          setCurrentFrame(frame);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [imagesLoaded, totalFrames]);

  /* ---------------------------- CANVAS DRAW ------------------------------- */
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[currentFrame];
    if (!img || !img.complete) return;

    const isMobile = window.innerWidth < 768;
    const dpr = isMobile
      ? window.devicePixelRatio || 1
      : Math.min(window.devicePixelRatio || 1, 2);

    const width = window.innerWidth;
    const height = document.documentElement.clientHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const screenAspect = width / height;

    let drawW: number;
    let drawH: number;

    if (screenAspect > imgAspect) {
      drawW = width;
      drawH = width / imgAspect;
    } else {
      drawH = height;
      drawW = height * imgAspect;
    }

    const x = (width - drawW) / 2;
    const y = (height - drawH) / 2;

    ctx.drawImage(img, x, y, drawW, drawH);
  }, [currentFrame, imagesLoaded, images]);

  /* ------------------------------- RENDER -------------------------------- */
  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-[100svh]"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}

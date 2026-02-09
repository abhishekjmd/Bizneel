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

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  /* -------------------------------------------------------------------------- */
  /*                               LOAD IMAGES                                   */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let errorCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedNumber = String(i).padStart(3, "0");
      img.src = `${framesFolder}/${filePrefix}${paddedNumber}.${fileExtension}`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) setImagesLoaded(true);
      };

      img.onerror = () => {
        errorCount++;
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames && errorCount === totalFrames) {
          setLoadError("Could not load parallax images.");
        } else if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [framesFolder, totalFrames, fileExtension, filePrefix]);

  /* -------------------------------------------------------------------------- */
  /*                             SCROLL HANDLER                                  */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current!;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.clientHeight;
      const viewportHeight = document.documentElement.clientHeight;

      const scrollStart = rect.top;
      const scrollRange = containerHeight - viewportHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(1, -scrollStart / scrollRange),
      );

      const frameIndex = Math.min(
        Math.floor(scrollProgress * totalFrames),
        totalFrames - 1,
      );

      setCurrentFrame(frameIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded, totalFrames]);

  /* -------------------------------------------------------------------------- */
  /*                             CANVAS RENDER                                   */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[currentFrame];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = document.documentElement.clientHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, displayWidth, displayHeight);

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayWidth / displayHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawWidth = displayWidth;
      drawHeight = drawWidth / imgAspect;
      offsetY = (displayHeight - drawHeight) / 2;
    } else {
      drawHeight = displayHeight;
      drawWidth = drawHeight * imgAspect;
      offsetX = (displayWidth - drawWidth) / 2;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images, imagesLoaded, currentFrame]);

  /* -------------------------------------------------------------------------- */
  /*                                 RESIZE                                      */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (!imagesLoaded) return;
    const handleResize = () => setCurrentFrame((prev) => prev);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  /* -------------------------------------------------------------------------- */
  /*                                   ERROR                                     */
  /* -------------------------------------------------------------------------- */
  if (loadError) {
    return (
      <div className="relative h-[100svh] flex items-center justify-center">
        {loadError}
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                   RENDER                                    */
  /* -------------------------------------------------------------------------- */
  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden z-10">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-[100svh]"
          style={{ display: "block" }}
        />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-white text-sm">Loading {loadingProgress}%</div>
          </div>
        )}
      </div>
    </div>
  );
}

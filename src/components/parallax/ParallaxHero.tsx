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

  // Load all frame images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let errorCount = 0;

    console.log(
      `🎬 Starting to load ${totalFrames} frames from ${framesFolder}`,
    );

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedNumber = String(i).padStart(3, "0");
      const imagePath = `${framesFolder}/${filePrefix}${paddedNumber}.${fileExtension}`;
      img.src = imagePath;

      console.log(`Loading frame ${i}: ${imagePath}`);

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));

        if (loadedCount === totalFrames) {
          console.log(`✅ All ${totalFrames} frames loaded successfully!`);
          setImagesLoaded(true);
        }
      };

      img.onerror = () => {
        errorCount++;
        loadedCount++;
        console.warn(`❌ Failed to load frame ${i}: ${imagePath}`);
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));

        if (loadedCount === totalFrames) {
          if (errorCount === totalFrames) {
            setLoadError(`Could not load any images from "${framesFolder}". Please check:
                        1. Images exist in public${framesFolder}/
                        2. Files are named ${filePrefix}001.${fileExtension}, ${filePrefix}002.${fileExtension}, etc.
                        3. File extension is correct (${fileExtension})`);
          } else {
            console.log(
              `⚠️ Loaded ${totalFrames - errorCount}/${totalFrames} frames (${errorCount} failed)`,
            );
            setImagesLoaded(true);
          }
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [framesFolder, totalFrames, fileExtension, filePrefix]);

  // Handle scroll to update frame
  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.clientHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress
      const scrollStart = rect.top;
      const scrollRange = containerHeight - viewportHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, -scrollStart / scrollRange),
      );

      // Calculate frame index
      const frameIndex = Math.min(
        Math.floor(scrollProgress * totalFrames),
        totalFrames - 1,
      );

      setCurrentFrame(frameIndex);
    };

    handleScroll(); // Initial render
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded, totalFrames]);

  // Render current frame to canvas
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[currentFrame];

    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    // Use higher DPR for better quality, capped at 2 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Set canvas size with DPR for crisp rendering
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(dpr, dpr);

    // Enable high-quality image smoothing
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.clearRect(0, 0, canvas.width, canvas.height);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    // Use 'cover' behavior - fill entire canvas, crop if needed
    if (canvasAspect > imgAspect) {
      // Canvas is wider - fit to width and crop height
      drawWidth = canvas.width / (window.devicePixelRatio || 1);
      drawHeight = drawWidth / imgAspect;
      offsetX = 0;
      offsetY =
        (canvas.height / (window.devicePixelRatio || 1) - drawHeight) / 2;
    } else {
      // Canvas is taller - fit to height and crop width
      drawHeight = canvas.height / (window.devicePixelRatio || 1);
      drawWidth = drawHeight * imgAspect;
      offsetX = (canvas.width / (window.devicePixelRatio || 1) - drawWidth) / 2;
      offsetY = 0;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images, imagesLoaded, currentFrame]);

  // Handle resize
  useEffect(() => {
    if (!imagesLoaded) return;

    const handleResize = () => {
      // Trigger re-render on resize
      setCurrentFrame((prev) => prev);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  if (loadError) {
    return (
      <div className="relative h-screen">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center">
          <div className="text-center max-w-2xl px-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Parallax Images Not Found
            </h3>
            <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
              {loadError}
            </p>
            <div className="mt-6 p-4 bg-purple-50 rounded-lg text-left">
              <p className="text-xs text-purple-900 font-mono">
                Expected location: <strong>public{framesFolder}/</strong>
                <br />
                File naming: {filePrefix}001.{fileExtension}, {filePrefix}002.
                {fileExtension}, {filePrefix}003.{fileExtension}, ...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            imageRendering: "high-quality",
            display: "block",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-purple-600 text-sm tracking-widest uppercase font-light mb-2">
                Loading Experience
              </p>
              <p className="text-purple-400 text-xs">{loadingProgress}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

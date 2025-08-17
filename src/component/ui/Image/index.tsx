import clsx from "clsx";
import { useState } from "react";
import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackText?: string;
}

export default function Image({
  src,
  alt,
  className,
  width = 64,
  height = 64,
  fallbackText = "No Image",
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={clsx(styles.imageError, className)}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <div
      className={clsx("Image-root relative", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {isLoading && (
        <div
          className={clsx(styles.skeleton, styles.skeletonImage)}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={clsx(
          styles.image,
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        style={{ width: `${width}px`, height: `${height}px` }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

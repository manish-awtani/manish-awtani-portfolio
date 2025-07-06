import React, { useState, useRef, useEffect } from "react";

const VideoWithLoader = ({ src, className, autoPlay = true, muted = true, loop = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setProgress(0);
  }, [src]);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
    setProgress(0);
  };

  const handleProgress = () => {
    if (videoRef.current && videoRef.current.buffered.length > 0) {
      const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((bufferedEnd / duration) * 100);
      }
    }
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handlePlay = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 dark:bg-black z-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
            <p className="text-white text-sm">Loading video...</p>
            {progress > 0 && (
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-pink-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 dark:bg-black z-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="text-red-500 text-4xl">⚠️</div>
            <p className="text-white text-sm">Failed to load video</p>
          </div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        className={className}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        onLoadStart={handleLoadStart}
        onProgress={handleProgress}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onPlay={handlePlay}
        playsInline
      />
    </div>
  );
};

export default VideoWithLoader; 
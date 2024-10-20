// src/components/AdvancedImageHandler.js
import React, { useState } from 'react';

function ImageWithFallback({ src, alt, fallbackSrc, width = '200px', height='100px' }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ width: width, height: height, position: 'relative' }}>
      {!isLoaded && !hasError && 
        <img src='/image/loading.gif' height={height} width={width} alt='Loading...'></img>}
      {hasError && <p>Image failed to load!</p>}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default ImageWithFallback;

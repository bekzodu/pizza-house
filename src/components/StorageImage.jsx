import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../firebase';

const StorageImage = ({ path, alt, className, lowQualityFallback }) => {
  const [imageUrl, setImageUrl] = useState(lowQualityFallback || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchImage = async () => {
      if (!path || path.trim() === '') {
        if (isMounted) {
          setLoading(false);
        }
        return;
      }
      
      try {
        const url = await getImageUrl(path);
        if (isMounted && url) {
          setImageUrl(url);
        }
      } catch (error) {
        console.error(`Error loading image ${path}:`, error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchImage();
    
    return () => {
      isMounted = false;
    };
  }, [path]);

  return (
    <>
      {loading && lowQualityFallback && (
        <img 
          src={lowQualityFallback} 
          alt={alt} 
          className={`${className} placeholder`} 
        />
      )}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={alt} 
          className={className} 
          loading="lazy"
          onLoad={() => setLoading(false)}
        />
      )}
      {!imageUrl && !loading && !lowQualityFallback && (
        <div className={`${className} image-error`}>Image not available</div>
      )}
    </>
  );
};

export default StorageImage; 
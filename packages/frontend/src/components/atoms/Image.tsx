import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
);

export default Image;

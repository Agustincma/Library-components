import React from 'react';
import styles from './ImageA.module.css';

export type ImageAProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
};

const ImageA: React.FC<ImageAProps> = ({ src, alt = '', width, height, style, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`${styles.imageA}${className ? ` ${className}` : ''}`}
    />
  );
};

export default ImageA;

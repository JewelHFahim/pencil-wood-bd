import React, { useRef, useState } from "react";
import "./ImageZoom.css";

interface ImageZoomProps {
  src: string | undefined;
  zoomScale: number 
}
const ImageZoom: React.FC<ImageZoomProps> = ({ src, zoomScale }) => {
  const imgContRef = useRef<HTMLDivElement | null>(null);
  const [zoomPosition, setZoomPosition] = useState<{x:number, y:number}>({ x: 0, y: 0 });
  const [isZoomed, setiIsZoomed] = useState<boolean>(false);

  const handleMoveMouse = (e:React.MouseEvent<HTMLDivElement>) => {
    if (!imgContRef.current) return;
    const { top, left, width, height } = imgContRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 70;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setiIsZoomed(true);
  const handleMouseLeave = () => setiIsZoomed(false);

  return (
    <div
      ref={imgContRef}
      onMouseMove={handleMoveMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="imgContainer relative overflow-hidden h-[55vh] sm:h-[30vw]"
    >
      <div className={`mainImg  ${isZoomed ? "zoomed" : ""}`}>
        <img src={src} alt="img" className="w-full h-full object-cover object-center" />
      </div>

      {isZoomed && (
        <div
          className="zoomOverly"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: `${zoomScale * 100}%`,
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;

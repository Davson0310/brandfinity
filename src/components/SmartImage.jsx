import { useState } from "react";

const SmartImage = ({ src, alt }) => {
  const [orientation, setOrientation] = useState("landscape");

  const handleLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;

    if (naturalHeight > naturalWidth) {
      setOrientation("portrait");
    } else if (naturalWidth > naturalHeight) {
      setOrientation("landscape");
    } else {
      setOrientation("square");
    }
  };

  const aspectClass =
    orientation === "portrait"
      ? "aspect-[3/4]"
      : orientation === "square"
      ? "aspect-square"
      : "aspect-video";

  return (
    <div className={`relative overflow-hidden ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

export default SmartImage;

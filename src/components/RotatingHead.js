import React, { useEffect, useState } from "react";

export const RotatingHead = ({ src, alt }) => {
  const [transformStyle, setTransformStyle] = useState("rotate-left");

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      if (transformStyle === "rotate-left") {
        setTransformStyle("rotate-right");
      } else {
        setTransformStyle("rotate-left");
      }
    }, 500);

    return () => clearInterval(rotateInterval);
  }, [transformStyle]);

  return <img src={src} alt={alt} className={`head ${transformStyle}`} />;
};

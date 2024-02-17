import { useEffect, useState } from "react";

const useImage = (endPoint) => {
  let [currImageSrc, setCurrImgSrc] = useState();
  let areImagesMissing = true;
  const handleImgSrc = (newEndpoint) => {
    setCurrImgSrc(newEndpoint);
  };

  useEffect(() => {
    // Dynamic import of the image
    import("../assets/gameRelated/explorers/" + endPoint)
      .then((module) => {
        setCurrImgSrc(module.default);
      })
      .catch((error) => {
        if (areImagesMissing) {
        } else {
          console.error("Error loading the image:", error);
        }
      });
  });

  return {
    currImageSrc,
    handleImgSrc,
  };
};

export default useImage;

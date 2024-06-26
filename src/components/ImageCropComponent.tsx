import React, { useState } from "react";
import ReactCrop, { type Crop } from "react-image-crop";
import "@/lib/ReactCrop.css";
import { Button } from "./ui/button";

const ImageCropComponent: React.FC<{
  image: string;
  onCropComplete: (croppedImage: string) => void;
}> = ({ image, onCropComplete }) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropChange = (newCrop: Crop) => {
    setCrop(newCrop);
  };

  const onImageLoaded = (img: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    canvas.width = (completedCrop?.width || 0) * scaleX;
    canvas.height = (completedCrop?.height || 0) * scaleY;
    const ctx = canvas.getContext("2d");
    if (ctx && completedCrop) {
      ctx.drawImage(
        img,
        (completedCrop.x || 0) * scaleX,
        (completedCrop.y || 0) * scaleY,
        (completedCrop.width || 0) * scaleX,
        (completedCrop.height || 0) * scaleY,
        0,
        0,
        (completedCrop.width || 0) * scaleX,
        (completedCrop.height || 0) * scaleY
      );
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setCroppedImage(url);
        }
      });
    }
  };

  return (
    <div>
      <ReactCrop
        crop={crop}
        onChange={onCropChange}
        onComplete={(crop) => setCompletedCrop(crop)}
      >
        <img src={image} alt="text" />
      </ReactCrop>
      <Button
        className="btn primary mt-2"
        onClick={() => croppedImage && onCropComplete(croppedImage)}
      >
        Confirm Crop
      </Button>
      {completedCrop && (
        <div>
          <img
            alt="Crop preview"
            style={{ display: "none" }}
            src={image}
            onLoad={(e) => onImageLoaded(e.currentTarget)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCropComponent;

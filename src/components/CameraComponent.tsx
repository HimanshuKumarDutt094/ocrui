import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "./ui/button";

const CameraComponent: React.FC<{ onCapture: (image: string) => void }> = ({
  onCapture,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      onCapture(imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full h-64"
        videoConstraints={{ facingMode: "environment" }}
      />
      <Button className="btn primary mt-4" onClick={capture}>
        Capture
      </Button>
      {capturedImage && (
        <div className="mt-4">
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraComponent;

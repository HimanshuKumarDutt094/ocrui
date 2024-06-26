import React, { useState } from "react";
import { Input } from "./ui/input";

const FileUploadComponent: React.FC<{
  onUpload: (formData: FormData) => void;
}> = ({ onUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      onUpload(formData);

      // Create a preview URL for the selected file
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <div>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <div>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImagesUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // You can upload the files to your server or display them in the UI
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-4">Listing Photos / Ads</h2>
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        <button className="mt-4 btn bg-blue-500 text-white px-4 py-2 rounded">
          Upload Images
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;

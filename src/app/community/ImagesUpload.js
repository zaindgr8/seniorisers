import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImagesUpload = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [businessInfoId, setBusinessInfoId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/community_businessinfo?endpoint=business-info"
        );
        const latestEntry = response.data[response.data.length - 1];
        setBusinessInfoId(latestEntry._id);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);

    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      toast.error("Please select some files.");
      return;
    }

    if (!businessInfoId) {
      toast.error("Business Info ID is missing.");
      return;
    }

    const data = new FormData();
    files.forEach((file) => data.append("files", file)); // Append all files
    data.append("businessInfoId", businessInfoId);

    try {
      let result = await fetch(
        "/api/community_businessinfo?endpoint=property-images",
        {
          method: "POST",
          body: data,
        }
      );
      result = await result.json();
      console.log("result", result);

      if (result.success) {
        toast.success("Successfully Uploaded!!");
      } else {
        toast.error("Failed to upload images.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload images.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true, // Ensure multiple files can be selected
  });

  return (
    <div className="container mx-auto mt-4">
      <ToastContainer />
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
      </div>
      <div className="flex flex-wrap mt-4">
        {previews.map((preview, index) => (
          <div key={index} className="w-32 h-32 m-2">
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 btn bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload Images
      </button>
    </div>
  );
};

export default ImagesUpload;

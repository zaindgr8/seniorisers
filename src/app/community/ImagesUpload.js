import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImagesUpload = () => {
  const [previews, setPreviews] = useState([]);
  const [images, setImages] = useState([]);
  const [businessInfoId, setBusinessInfoId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch the businessInfoId and images when the component mounts
  useEffect(() => {
    const fetchBusinessInfoId = async () => {
      try {
        const response = await axios.get("/api/communtyinfo");
        const latestEntry = response.data.data?.[response.data.data.length - 1];

        if (latestEntry && latestEntry.id) {
          setBusinessInfoId(latestEntry.id);
        } else {
          throw new Error("No valid entry found.");
        }
      } catch (error) {
        console.error("Error fetching business info:", error);
        toast.error("Failed to fetch business info.");
      }
    };

    fetchBusinessInfoId();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      if (!businessInfoId) return; // Ensure businessInfoId is available

      try {
        const response = await fetch(
          `/api/propertyimages?businessInfoId=${businessInfoId}`
        );
        const result = await response.json();

        if (response.ok && result.data && result.data.length > 0) {
          setPreviews(result.data[0].image);
          setImages(result.data[0].image);
          setIsEditMode(true);
        } else {
          setIsEditMode(false);
        }
      } catch (error) {
        toast.error("Failed to fetch images.");
        console.error("Fetch error:", error);
      }
    };

    fetchImages();
  }, [businessInfoId]);

  // Handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImages((prev) => [...prev, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  // Handle image upload
  const handleSubmit = async () => {
    if (!businessInfoId) {
      toast.error("Business Info ID is missing.");
      return;
    }

    try {
      const response = await fetch("/api/propertyimages", {
        method: isEditMode ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          images,
          businessInfoId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      toast.success("Images uploaded successfully!");
      console.log(result.data);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload images.");
    }
  };

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
        {isEditMode ? "Update Images" : "Upload Images"}
      </button>
    </div>
  );
};

export default ImagesUpload;

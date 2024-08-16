import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImagesUpload = () => {
  const [previews, setPreviews] = useState([]);
  const [images, setImages] = useState([]);
  const [agentbusinessInfoId, setAgentbusinessInfoId] = useState(null);

  // Fetch the latest agentBusinessInfoId on component mount
  useEffect(() => {
    const fetchLatestEntry = async () => {
      try {
        const response = await axios.get("/api/agentBusinessinfo");
        const latestEntry = response.data[response.data.length - 1];

        if (latestEntry && latestEntry.id) {
          setAgentbusinessInfoId(latestEntry.id);
        } else {
          toast.error("Failed to fetch the latest agent business info ID.");
        }
      } catch (error) {
        console.error("Fetching error:", error);
        toast.error("Failed to fetch agent business info ID.");
      }
    };

    fetchLatestEntry();
  }, []);

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

  const handleSubmit = async () => {
    if (!agentbusinessInfoId) {
      toast.error("No agent business info ID found.");
      return;
    }

    try {
      const response = await fetch("/api/agentimage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          images,
          agentbusinessInfoId, // Pass the fetched agentbusinessInfoId
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

  console.log(images);

  return (
    <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2">
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
          className="mt-4 mb-4 btn bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload Images
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;

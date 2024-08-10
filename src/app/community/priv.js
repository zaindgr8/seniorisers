// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const SeniorLivingProfile = () => {
//   const swiperRef = useRef(null);
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   const toggleFullScreen = () => {
//     if (isFullScreen) {
//       handleExitFullScreen();
//     } else {
//       handleFullScreen();
//     }
//   };

//   const handleFullScreen = () => {
//     if (swiperRef.current) {
//       if (swiperRef.current.requestFullscreen) {
//         swiperRef.current.requestFullscreen();
//       } else if (swiperRef.current.webkitRequestFullscreen) {
//         // Safari
//         swiperRef.current.webkitRequestFullscreen();
//       } else if (swiperRef.current.msRequestFullscreen) {
//         // IE11
//         swiperRef.current.msRequestFullscreen();
//       }
//       setIsFullScreen(true);
//     }
//   };

//   const handleExitFullScreen = () => {
//     if (
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.msFullscreenElement
//     ) {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         // Safari
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         // IE11
//         document.msExitFullscreen();
//       }
//       setIsFullScreen(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row">
//       {/* Left: Image/Carousel Section */}
//       <div className="w-full md:w-2/3 relative">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Ocean Hills Senior Living
//         </h2>
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={10}
//           slidesPerView={1}
//           className="rounded-lg overflow-hidden"
//           ref={swiperRef}
//           onDoubleClick={toggleFullScreen}
//         >
//           <SwiperSlide>
//             <img
//               src="assets/img/senior1.jpeg"
//               alt="Living Area"
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src="assets/img/senior1.jpeg"
//               alt="Living Area"
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//           {/* Add more SwiperSlides as needed */}
//         </Swiper>
//       </div>

//       {/* Right: Profile and Actions Section */}
//       <div className="w-full md:w-1/3 mt-4 md:mt-0 md:pl-4">
//         <div className="text-center">
//           <h3 className="text-lg font-semibold text-gray-800">
//             Angelica Tasse
//           </h3>
//           <img
//             src="assets/img/senior1.jpeg"
//             alt="Ocean Hills Logo"
//             className="mx-auto mb-4 rounded-lg"
//           />
//           <p className="text-sm text-gray-500">Community Relations Director</p>
//         </div>

//         <div className="mt-6 space-y-3">
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Visit Website
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Connect
//           </button>
//           <button className="w-full bg-yellow-500 text-white py-2 rounded flex items-center justify-center">
//             <span className="mr-2">💰</span> Sponsor
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Share
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Favorite
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeniorLivingProfile;
// components/newPost.jsx
// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const NewPost = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [previewImage, setPreviewImage] = useState(null);
//   const router = useRouter();

//   const [form, setForm] = useState({});

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setPreviewImage(null);
//     }
//   };

//   const onSubmit = async (data) => {
//     let formData = new FormData();

//     formData.append("name", data.name);
//     for (let file of data.imageUrl) {
//       formData.append(file.name, file);
//     }

//     await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     // Clear form data and reset input fields
//     setForm({});
//     setPreviewImage(null);
//     reset();
//     router.refresh();
//   };
//   return (
//     <main className="flex flex-col items-center justify-between ">
//       <div className="max-w-md mx-auto">
//         <form
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="input1"
//             >
//               Text Input 1
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full
//                          py-2 px-3 text-gray-700 leading-tight focus:outline-none
//                          focus:shadow-outline"
//               id="input1"
//               type="text"
//               placeholder="Enter text input 1"
//               {...register("name")}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="fileInput"
//             >
//               File Input
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               className="file-input file-input-bordered w-full max-w-xs"
//               id="fileInput"
//               {...register("imageUrl")}
//               onChange={handleFileChange}
//             />
//             {previewImage && (
//               <Image
//                 width={200}
//                 height={200}
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-2 w-full h-32 object-cover"
//               />
//             )}
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold
//                          py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default NewPost;
// components/newPost.jsx
"use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const NewPost = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [previewImage, setPreviewImage] = useState(null);
//   const router = useRouter();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setPreviewImage(null);
//     }
//   };

//   const onSubmit = async (data) => {
//     let formData = new FormData();

//     formData.append("name", data.name);
//     formData.append("imageUrl", data.imageUrl[0]); // Corrected for single file

//     await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     // Clear form data and reset input fields
//     setPreviewImage(null);
//     reset();
//     router.refresh();
//   };

//   return (
//     <main className="flex flex-col items-center justify-between">
//       <div className="max-w-md mx-auto">
//         <form
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="input1"
//             >
//               Text Input 1
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full
//                          py-2 px-3 text-gray-700 leading-tight focus:outline-none
//                          focus:shadow-outline"
//               id="input1"
//               type="text"
//               placeholder="Enter text input 1"
//               {...register("name")}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="fileInput"
//             >
//               File Input
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               className="file-input file-input-bordered w-full max-w-xs"
//               id="fileInput"
//               {...register("imageUrl")}
//               onChange={handleFileChange}
//             />
//             {previewImage && (
//               <Image
//                 width={200}
//                 height={200}
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-2 w-full h-32 object-cover"
//               />
//             )}
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold
//                          py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default NewPost;
"use client";
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState();
  const [businessInfoId, setBusinessInfoId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/community_businessinfo?endpoint=business-info"
        );
        console.log("response", response);

        const latestEntry = response.data[response.data.length - 1];
        console.log("latestEntry", latestEntry);

        setBusinessInfoId(latestEntry._id);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please Select a File");
      return;
    }
    if (!businessInfoId) {
      alert("Business Info ID is missing");
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("businessInfoId", businessInfoId);

    try {
      let result = await fetch(
        "/api/community_businessinfo?endpoint=CompanyImage",
        {
          method: "POST",
          body: data,
        }
      );
      result = await result.json();
      console.log("result", result);

      if (result.success) {
        alert("Successfully Uploaded!!");
      } else {
        alert("Failed!!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed!!");
    }
  };

  return (
    <>
      <h2>Upload Image in Next JS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default UploadImage;

/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useEffect, useState } from "react";

// const GetMongoImage = () => {
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           "/api/community_businessinfo?endpoint=images"
//         );
//         const result = await response.json();
//         console.log("Fetched images:", result);
//         if (result.success) {
//           setImages(result.images);
//         } else {
//           console.log("Error");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchImages();
//   }, []);
//   return (
//     <>
//       <h2>Get Image From Mongo DB</h2>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {images.map((image) => (
//           <div key={image._id} style={{ margin: "10px" }}>
//             <img
//               src={`data:${image.contentType};base64,${Buffer.from(
//                 image.data
//               ).toString("base64")}`}
//               alt={image.name}
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//             <p>{image.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default GetMongoImage;

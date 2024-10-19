import axios from "axios";

// Cloudinary credentials
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dyryfgjro/image/upload";
const cloudinaryPreset = "retinaai";
const cloudName = "dyryfgjro";

// Function to upload files to Cloudinary
export const uploadToCloudinary = async (file: File | Blob) => {
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloudinaryPreset);
  formData.append("cloud_name", cloudName);

  try {
    const response = await axios.post(cloudinaryUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.secure_url; 
  } catch (error) {
    alert("Error uploading to Cloudinary");
    return null;
  }
};

// Function to upload an image from a URL to Cloudinary
export const uploadImageFromUrl = async (imageUrl: string) => {
  // console.log(imageUrl)
  try {
    // Fetch the image from the provided URL
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const imageBlob = response.data;

    // Upload the fetched image Blob to Cloudinary
    const cloudinaryUrl = await uploadToCloudinary(imageBlob);
    return cloudinaryUrl;
  } catch (error) {
    console.error("Error fetching or uploading the image:", error);
    return null;
  }
};

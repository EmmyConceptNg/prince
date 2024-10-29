import axios from "axios";

let baseURL = "";

if (window.location.origin.includes("localhost")) {
  baseURL = "http://localhost:5555";
} else {
  baseURL = "https://prince-server-kck2.onrender.com";
}

const instance = axios.create({
  baseURL,
});

export default instance;

export const getImageUrl = (imagePath) => {
  // Construct full URL for retrieving images
  return `${baseURL}/images/${imagePath}`;
};

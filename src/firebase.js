// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Helper function to get image URLs
const getImageUrl = async (path) => {
  try {
    // Check if path is empty or invalid
    if (!path || path === "/" || path.trim() === "") {
      throw new Error("Invalid path: Cannot use empty path or root reference");
    }
    
    // Make sure path doesn't start with a slash
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;
    
    const imageRef = ref(storage, cleanPath);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

export { app, analytics, storage, getImageUrl }; 
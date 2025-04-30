// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAnalytics, 
  logEvent, 
  setUserId, 
  setUserProperties, 
  setAnalyticsCollectionEnabled,
  setDefaultEventParameters,
  isSupported
} from "firebase/analytics";
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
let analytics = null;

// Initialize analytics only if supported (e.g., not in SSR, or when cookies are disabled)
const initAnalytics = async () => {
  try {
    const isAnalyticsSupported = await isSupported();
    if (isAnalyticsSupported) {
      analytics = getAnalytics(app);
      // Enable analytics collection
      setAnalyticsCollectionEnabled(analytics, true);
      // Set default parameters that will be added to all events
      setDefaultEventParameters(analytics, {
        app_version: process.env.REACT_APP_VERSION || '1.0.0',
        deployment_env: process.env.NODE_ENV
      });
      console.log("Firebase Analytics initialized successfully");
    } else {
      console.log("Firebase Analytics is not supported in this environment");
    }
  } catch (error) {
    console.error("Error initializing Firebase Analytics:", error);
  }
};

// Initialize analytics
initAnalytics();

const storage = getStorage(app);

// Analytics helper functions
const trackEvent = (eventName, eventParams = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  } else {
    console.log(`Analytics event not tracked (analytics not available): ${eventName}`, eventParams);
  }
};

const trackPageView = (pagePath, pageTitle = null) => {
  const params = {
    page_path: pagePath,
  };
  
  if (pageTitle) {
    params.page_title = pageTitle;
  }
  
  trackEvent('page_view', params);
};

const trackUserEngagement = (timeSpentMs) => {
  trackEvent('user_engagement', { engagement_time_msec: timeSpentMs });
};

const trackOutboundLink = (url) => {
  trackEvent('outbound_link', { link_url: url, link_domain: new URL(url).hostname });
};

const trackSearch = (searchTerm) => {
  trackEvent('search', { search_term: searchTerm });
};

const trackAddToCart = (item) => {
  trackEvent('add_to_cart', {
    currency: 'USD',
    value: item.price,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity || 1
      }
    ]
  });
};

const trackPurchase = (transaction) => {
  trackEvent('purchase', {
    transaction_id: transaction.id,
    value: transaction.value,
    currency: 'USD',
    tax: transaction.tax,
    shipping: transaction.shipping,
    items: transaction.items
  });
};

const identifyUser = (userId, userProperties = {}) => {
  if (analytics) {
    setUserId(analytics, userId);
    if (Object.keys(userProperties).length > 0) {
      setUserProperties(analytics, userProperties);
    }
  }
};

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

export { 
  app, 
  analytics, 
  storage, 
  getImageUrl,
  trackEvent,
  trackPageView,
  trackUserEngagement,
  trackOutboundLink,
  trackSearch,
  trackAddToCart,
  trackPurchase,
  identifyUser
}; 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Request from './pages/Request';
import ScrollToTop from './components/ScrollToTop';
import { trackEvent } from './firebase';
import './App.css';

function App() {
  useEffect(() => {
    // Track app load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    trackEvent('app_loaded', { load_time_ms: loadTime });
    
    // Track browser and device information
    trackEvent('user_device_info', {
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      user_agent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform
    });
    
    // Track user engagement time
    let startTime = Date.now();
    
    const trackVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Date.now() - startTime;
        trackEvent('user_engagement', { 
          engagement_time_msec: timeSpent,
          page_title: document.title
        });
      } else {
        startTime = Date.now();
      }
    };
    
    // Track global errors
    const trackError = (error, errorInfo) => {
      trackEvent('app_error', {
        error_message: error.message,
        error_stack: error.stack,
        error_info: JSON.stringify(errorInfo),
        page_url: window.location.href
      });
    };
    
    // Set up global error tracking
    window.addEventListener('error', (event) => {
      trackError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });
    
    // Track when user switches tabs
    document.addEventListener('visibilitychange', trackVisibilityChange);
    
    // Track when the user is about to leave
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - startTime;
      trackEvent('user_exit', { 
        time_spent_ms: timeSpent,
        exit_page: window.location.pathname
      });
    });
    
    return () => {
      document.removeEventListener('visibilitychange', trackVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Pizza House - Authentic New York Style Pizza</title>
        <meta name="description" content="Experience authentic New York style pizza at Pizza House. Fresh ingredients, traditional recipes, and perfect crust. Order online or visit us today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pizzahouse103.com" />
      </Helmet>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

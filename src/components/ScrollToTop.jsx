import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../firebase';

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Track page view with Firebase Analytics
    trackPageView(pathname, document.title);
    
    // Track navigation event with additional data
    trackEvent('navigation', {
      from_path: sessionStorage.getItem('currentPath') || 'entry',
      to_path: pathname,
      navigation_time: new Date().toISOString()
    });
    
    // Store current path for future navigation tracking
    sessionStorage.setItem('currentPath', pathname);
    
    // Calculate and track session duration
    const sessionStartTime = sessionStorage.getItem('sessionStartTime');
    if (!sessionStartTime) {
      sessionStorage.setItem('sessionStartTime', Date.now().toString());
      trackEvent('session_start', {
        start_time: new Date().toISOString(),
        entry_page: pathname
      });
    } else {
      const sessionDuration = Date.now() - parseInt(sessionStartTime, 10);
      // Update session duration every page change
      trackEvent('session_duration_update', {
        duration_ms: sessionDuration,
        current_page: pathname
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

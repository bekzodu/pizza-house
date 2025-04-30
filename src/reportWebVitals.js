import { trackEvent } from './firebase';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Track Core Web Vitals
      getCLS(metric => {
        onPerfEntry(metric);
        trackEvent('web_vital_cls', { value: metric.value });
      });
      getFID(metric => {
        onPerfEntry(metric);
        trackEvent('web_vital_fid', { value: metric.value });
      });
      getFCP(metric => {
        onPerfEntry(metric);
        trackEvent('web_vital_fcp', { value: metric.value });
      });
      getLCP(metric => {
        onPerfEntry(metric);
        trackEvent('web_vital_lcp', { value: metric.value });
      });
      getTTFB(metric => {
        onPerfEntry(metric);
        trackEvent('web_vital_ttfb', { value: metric.value });
      });
    });
  }
};

export default reportWebVitals;

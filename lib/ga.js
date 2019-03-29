/* eslint-disable camelcase */
export const GA_TRACKING_ID = 'UA-55201845-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  global.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  global.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

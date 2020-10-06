export const SITE_ID = "87720256-01ab-4f98-9cc4-ea9a7d0a8230";
export const pageview = () => {
  if (global.Shynet) {
    global.Shynet.newPageLoad();
  }
};

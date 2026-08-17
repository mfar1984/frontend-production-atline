// Runtime Configuration
//
// Served as a plain static file, so these can be changed on the server and take
// effect on the next browser reload — no rebuild, no redeploy. That is the whole
// point of this file: the client-side API base URL is NOT baked into the bundle.
//
// On the server this file lives at:
//   /home2/atlineco/public_html/v4/public/runtime-config.js
window.__RUNTIME_CONFIG__ = {
  // The admin backend, which serves /api/public/* for this site.
  BACKEND_API_URL: 'https://sys.atline.com.my',
  // This site's canonical address.
  WEBSITE_URL: 'https://www.atline.com.my',
};

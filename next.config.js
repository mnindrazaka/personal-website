const withImages = require("next-images");

module.exports = withImages({
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "https://blog.mnindrazaka.com/:slug",
        permanent: true,
      },
    ];
  },
});

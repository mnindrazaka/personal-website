module.exports = {
    target: "serverless",
    async redirects() {
        return [
          {
            source: '/:slug',
            destination: 'https://blog.mnindrazaka.com/:slug',
            permanent: true,
          },
        ]
      },
}

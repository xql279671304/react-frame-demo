const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/*',
    proxy({
      target: 'https://www.fastmock.site/mock/02e5a37115fa75c7c564bca4cb4d7829/',
      changeOrigin: true,
    })
  );
};

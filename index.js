var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 80;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer().listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});

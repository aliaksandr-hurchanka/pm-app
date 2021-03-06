var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.development.config');
var path = require('path');
var express = require('express');

var app = express();
var port = 9000;
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));
app.use('/dist', express.static(__dirname + '/public'));
// delete process.env.BROWSER;

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
})

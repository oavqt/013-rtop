const express = require('express');

const server = express();
const webpack = require('webpack');
const config = require('../webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
});
const webpackHotMiddleWare = require('webpack-hot-middleware')(compiler, {
  reload: true,
});
const staticMiddleWare = express.static('dist');

server.use(webpackDevMiddleWare);
server.use(webpackHotMiddleWare);
server.use(staticMiddleWare);

server.listen(3333, () => {
  console.log('Server is starting at http://localhost:3333/...');
});

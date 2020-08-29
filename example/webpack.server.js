import express from 'express'; 
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel.js';
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3000, () => {
  console.log('Listening');
});
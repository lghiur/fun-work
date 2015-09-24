module.exports = function(gulp, plugins) {
  var webpack =  require('webpack'),
    webpackStream = require('webpack-stream'),
    files = require('./files'),
    webpackConfig = {
    output: {
      filename: files.js.buildFile
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
      mangle: false
    })]
  };

  var livereloadConfig = {
    start: true
  };

  if(!plugins.util.env.production) {
    webpackConfig.devtool = 'inline-source-map';
  }

  return function() {
    return gulp.src(files.destFolder + '/' + files.js.main)
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(files.destFolder));
  };
};

var webpack =  require('webpack'),
  webpackStream = require('webpack-stream');

module.exports = function(gulp, plugins) {
  return function() {
    var webpackConfig = {
      output: {
        filename: global.files.js.buildFile
      },  
      plugins: [new webpack.optimize.UglifyJsPlugin({
        mangle: false
      })]
    };

    if(!plugins.util.env.production) {
      webpackConfig.devtool = 'inline-source-map';
    }

    return gulp.src(global.files.destFolder + '/' + global.files.js.main)
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest(global.files.destFolder));
  };
};

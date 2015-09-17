module.exports = function(gulp, plugins) {
  var webpack = require('webpack'),
    webpackConfig = {
    output: {
      filename: 'build.js'
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
    return gulp.src('build/app.js')
    .pipe(plugins.webpack(webpackConfig))
    .pipe(plugins.duration('webpack process'))
    .pipe(gulp.dest('build/'))
    .pipe(plugins.livereload({ start: true }));
  }
};
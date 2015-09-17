module.exports = function(gulp, plugins) {
  var vendors = [
    './bower_components/react/react.js',
    './bower_components/reflux/dist/reflux.min.js'
  ];
  
  return function() {
    return gulp
      .src(vendors)
      .pipe(plugins.concat('vendors.js'))
      .pipe(gulp.dest('build'))
  }
};
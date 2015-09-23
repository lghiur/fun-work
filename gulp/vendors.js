module.exports = function(gulp, plugins) {
  var vendors = [
    './bower_components/flux/dist/Flux.js',
    './bower_components/eventemitter2/lib/eventemitter2.js',
    './bower_components/react/react.js'
  ];

  return function() {
    return gulp
      .src(vendors)
      .pipe(plugins.concat('vendors.js'))
      .pipe(gulp.dest('build'));
  };
};

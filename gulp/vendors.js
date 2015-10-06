module.exports = function(gulp, plugins) {
  var vendors = [
    './bower_components/flux/dist/Flux' + (!plugins.util.env.production ? '' : '.min') + '.js',
    './bower_components/eventemitter2/lib/eventemitter2.js',
    './bower_components/react/react-with-addons' + (!plugins.util.env.production ? '' : '.min') + '.js'
  ];

  return function() {
    return gulp
      .src(vendors)
      .pipe(plugins.concat('vendors.js'))
      .pipe(gulp.dest(global.files.destFolder));
  };
};

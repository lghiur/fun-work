module.exports = function(gulp, plugins) {
  var compasConfig = {
    css: 'build',
    sass: 'app',
    image: 'build/images',
    style: 'compressed'
  };
  return function() {
    return gulp
      .src(['app/**/*.scss'])
      .pipe(plugins.compass(compasConfig))
      .pipe(gulp.dest('build'));
  }
};
module.exports = function(gulp, plugins) {
  return function() {
    return gulp
      .src(['app/**/*.html'])
      .pipe(gulp.dest('build'));
  }
};
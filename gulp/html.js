var files = require('./files');

module.exports = function(gulp, plugins) {
  return function() {
    return gulp
      .src(files.html.all)
      .pipe(gulp.dest(files.destFolder));
  };
};

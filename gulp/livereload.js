var files = require('./files');

module.exports = function(gulp, plugins) {
  var livereloadConfing = {
    livereload: false,
    defaultFile: files.html.main,
    open: true
  };

  return function() {
    return gulp
      .src(files.destFolder)
      .pipe(plugins.serverLivereload(livereloadConfing));
  };
};

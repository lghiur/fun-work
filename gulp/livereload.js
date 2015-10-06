module.exports = function(gulp, plugins) {
  var livereloadConfing = {
    livereload: false,
    defaultFile: global.files.html.main,
    open: true
  };

  return function() {
    return gulp
      .src(global.files.destFolder)
      .pipe(plugins.serverLivereload(livereloadConfing));
  };
};

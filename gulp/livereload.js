module.exports = function(gulp, plugins) {
  var livereloadConfing = {
    livereload: false,
    defaultFile: 'index.html',
    open: true
  };

  return function() {
    return gulp
      .src('build')
      .pipe(plugins.serverLivereload(livereloadConfing));
  }
};
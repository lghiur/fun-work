var helpers = require('./helpers')();

module.exports = function(gulp, plugins) {
  return function() {
    plugins.livereload.listen({ start: true });
    gulp.watch(helpers.jsFiles, ['scripts']);
  }
};
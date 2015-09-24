var helpers = require('./helpers'),
  files = require('./files');

module.exports = function(gulp, plugins) {
  return function() {
    plugins.livereload.listen({ start: true });
    gulp.watch(files.js.all, ['scripts']);
    gulp.watch(files.destFolder + '/' + files.js.buildFile, plugins.livereload.changed);
  };
};

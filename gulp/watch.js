var helpers = require('./helpers');

module.exports = function(gulp, plugins) {
  return function() {
    plugins.livereload.listen({ start: true });
    gulp.watch(global.files.js.all, gulp.series('scripts:development', 'test')).on('change', function(path) {
      global.tempScriptFiles = path;
      global.tempTestFiles = helpers.getFileBuildPath(helpers.getTestOfScript(path));
    });
    gulp.watch(global.files.destFolder + '/' + global.files.js.buildFile, plugins.util.noop()).on('change', function(path) {
      plugins.livereload.changed(path);
    });
    gulp.watch(global.files.tests.all, gulp.series('test')).on('change', function(path) {
      global.tempTestFiles = helpers.getFileBuildPath(path);
    });
  };
};

var gulp = require('gulp'),
  helpers = require('./gulp/helpers.js');

gulp.task('html', helpers.getTask({taskName: 'html'}));
gulp.task('vendors', helpers.getTask({taskName: 'vendors'}));
gulp.task('livereload', helpers.getTask({taskName: 'livereload'}));
gulp.task("es6fy:scripts", helpers.getTask({taskName: 'es6fy', type: 'scripts'}));
gulp.task("es6fy:tests", helpers.getTask({taskName: 'es6fy', type: 'tests'}));
gulp.task("webpack:scripts", helpers.getTask({taskName: 'webpack'}));
gulp.task("webpack:tests", helpers.getTask({taskName: 'webpack-tests'}));
gulp.task("watch", helpers.getTask({taskName: 'watch'}));
gulp.task('karma', helpers.getTask({taskName: 'karma'}));

gulp.task('test', gulp.series('es6fy:tests', 'webpack:tests', 'karma'));
gulp.task('scripts:development', gulp.series('es6fy:scripts', 'webpack:scripts'));
gulp.task('scripts', gulp.parallel('scripts:development', 'vendors'));
gulp.task(
  'build',
  gulp.series(
    gulp.parallel('html', 'scripts'),
    'test'
  )
);

gulp.task('start', gulp.series('build', 'livereload', 'watch'));

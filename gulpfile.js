var gulp = require('gulp'),
  helpers = require('./gulp/helpers.js');

gulp.task('html', helpers.getTask('html'));
gulp.task('vendors', helpers.getTask('vendors'));
gulp.task('livereload', helpers.getTask('livereload'));
gulp.task("webpack", ['es6fy'], helpers.getTask('webpack'));
gulp.task("es6fy", helpers.getTask('es6fy'));
gulp.task("watch", ['livereload'], helpers.getTask('watch'));

gulp.task('scripts', ['webpack', 'vendors']);
gulp.task('build', ['html', 'scripts']);
gulp.task('start', ['build', 'watch']);

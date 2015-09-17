var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

module.exports = function() {
  return {
    plugins: plugins,
    jsFiles: ['app/**/**/*.js', '!app/**/_**/**/'],
    getTask: function(task) {
      return require('./' + task)(gulp, plugins);
    }
  }
};
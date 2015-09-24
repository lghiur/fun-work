var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  files = require('./files'),
  helpers;

helpers = {
  plugins: plugins,
  getTask: function(task) {
    return require('./' + task)(gulp, plugins);
  }
};

module.exports = helpers;

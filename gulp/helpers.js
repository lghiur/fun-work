var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  files = require('./files'),
  helpers;

helpers = {
  plugins: plugins,
  getComponentPath: function(path) {
    return path.replace(/\\/g, '/').replace('app/', '').replace('build/', '');
  },
  getFileBuildPath: function(path) {
    return path.replace(/\\/g, '/').replace('app', 'build');
  },
  getTestOfScript: function(path) {
    return path.replace(/\\/g, '/').replace(/js\/(?![\s\S]*js\/)/, 'tests/');
  },
  getTask: function(options) {
    return require('./' + options.taskName)(gulp, plugins, options);
  }
};

module.exports = helpers;

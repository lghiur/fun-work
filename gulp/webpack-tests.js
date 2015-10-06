var glob = require("glob"),
  webpack =  require('webpack'),
  webpackStream = require('webpack-stream'),
  path = require('path'),
  webpack =  require('webpack'),
  webpackStream = require('webpack-stream');

function createEntryObject(arr) {
  var entry = {};

  arr.forEach(function(elem) {
    entry[elem.replace('build/', '').replace('.js', '')] = '../' + elem;
  });

  return entry;
}

module.exports = function(gulp, plugins) {
  return function() {
    var files = (global.tempTestFiles) ? [global.tempTestFiles] : glob.sync(global.files.tests.allBuild),
     entryFiles = createEntryObject(files),
     webpackConfig = {
      context: __dirname,
      entry: entryFiles,
      output: {
        filename: '[name].js'
      }
    },
    livereloadConfig = {
      start: true
    };

    if(!plugins.util.env.production) {
      webpackConfig.devtool = 'inline-source-map';
    }

    return gulp.src(global.files.destFolder + '/' + global.files.js.main)
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(global.files.destFolder));
  };
};

var Server = require('karma').Server,
  runner = require('karma').runner;

module.exports = function () {
  return function(done) {
    var karmaFiles = [
      'bower_components/bind-polyfill/index.js',
      'build/vendors.js'
      ];
    karmaFiles.push(global.tempTestFiles || global.files.tests.allBuild);

    new Server({
      configFile: __dirname + '/../karma.conf.js',
      files: karmaFiles,
      port: 9876,
      singleRun: true
    }, function() { done();}).start();
  };
};

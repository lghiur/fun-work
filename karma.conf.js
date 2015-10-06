module.exports = function(config) {
  config.set({
    colors: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    logLevel: 'ERROR',
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: './code_coverage/',
      subdir: 'report'
    },
    preprocessors: {
      'build/**/js/*.js': 'coverage'
    },
    plugins: [
      'karma-spec-reporter',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ]
  });
};

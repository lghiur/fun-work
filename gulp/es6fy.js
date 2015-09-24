var helpers = require('./helpers'),
  files = require('./files'),
  babelConfig = {
    externalHelpers: true,
    optional: ['runtime']
  },
  eslintConfig = {
    configFile: 'eslintrc.json'
  };

module.exports = function(gulp, plugins) {
  return function() {
    return gulp
      .src(files.js.all)
      .pipe(plugins.eslint(eslintConfig))
      .pipe(plugins.eslint.format())
      .pipe(plugins.newer(files.destFolder))
      .pipe(plugins.filelog())
      .pipe(plugins.plumber())
      .pipe(plugins.babel(babelConfig))
      .pipe(gulp.dest(files.destFolder));
  };
};

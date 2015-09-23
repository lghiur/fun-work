var helpers = require('./helpers')(),
  babelConfig = {
    externalHelpers: true,
    optional: ['runtime']
  },
  eslintConfig = {
    configFile: 'eslintrc.json'
  };
  
module.exports = function(gulp, plugins) {
  return function() {
    var stream = gulp
      .src(helpers.jsFiles)
      .pipe(plugins.eslint(eslintConfig))
      .pipe(plugins.eslint.format())
      .pipe(plugins.plumber())
      .pipe(plugins.newer('build'))
      .pipe(plugins.babel(babelConfig))
      .pipe(plugins.duration('webpack process'))
      .pipe(gulp.dest('build'));

    return stream;
  }
};
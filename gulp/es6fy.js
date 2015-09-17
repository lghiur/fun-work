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
      .pipe(plugins.newer('build'))
      /*.pipe(plugins.eslint(eslintConfig))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError())*/
      .pipe(plugins.babel(babelConfig))
      .pipe(plugins.duration('webpack process'))
      .pipe(gulp.dest('build'));

    stream.on('error', function(e) {
      console.log('errrorrr', e);
      plugins.util.log(e, 'Error');
    });

    return stream;
  }
};
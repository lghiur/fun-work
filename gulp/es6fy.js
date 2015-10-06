var helpers = require('./helpers'),
  babelConfig = {
    externalHelpers: true,
    optional: ['runtime']
  },
  eslintConfig = {
    configFile: 'eslintrc.json'
  };

module.exports = function(gulp, plugins, options) {

  return function() {
    var files;
    switch (options.type) {
      case 'scripts':
        files = global.tempScriptFiles ?
          'app/**/' + helpers.getComponentPath(global.tempScriptFiles) :
          global.files.js.all;
        break;
      case 'tests':
        files = global.files.tests.all;
        break;
    }

    return gulp
      .src(files)
      .pipe(plugins.eslint(eslintConfig))
      .pipe(plugins.eslint.format())
      .pipe(plugins.plumber())
      .pipe(plugins.babel(babelConfig))
      .pipe(gulp.dest(global.files.destFolder));
  };
};

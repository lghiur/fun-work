var files = {
  destFolder: 'build',
  js: {
    all: ['app/**/**/*.js', '!app/**/_**/**/'],
    main: 'app.js',
    buildFile: 'build.js'
  },
  html: {
    all: ['app/**/*.html'],
    main: 'index.html'
  }
};

module.exports = files;

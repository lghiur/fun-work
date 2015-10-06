global.files = {
  destFolder: 'build',
  sourceFolder: 'app',
  js: {
    all: ['app/**/js/*.js', 'app/app.js', '!app/**/_**/**/'],
    main: 'app.js',
    buildFile: 'build.js'
  },
  html: {
    all: ['app/**/*.html'],
    main: 'index.html'
  },
  tests: {
    all: ['app/**/tests/*.js'],
    allBuild: 'build/**/tests/*.js'
  }
};

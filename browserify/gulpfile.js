var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    browserifyCss = require('browserify-css'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    fse = require('fs-extra'),
    path = require('path'),
    _ = require('lodash');

gulp.task('dev:scripts', () => {

  return CreateBundler(true).bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer()) //optional, not all plugins support vinyl-file-stream only vinyl-buffer-stream
        .pipe(gulp.dest('./public/build'));
});

gulp.task('dev:styles', () => {
  return gulp
        .src('./src/styles/site.less')
        .pipe($.less())
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('dev', gulp.parallel('dev:scripts', 'dev:styles'));

gulp.task('dev:watch', gulp.series(
    'dev:styles',
    () => {
      gulp.watch('./src/styles/**/*.less', gulp.series('dev:styles'));

      const bundler = CreateBundler(true);

      function buildBundle() {
        return bundler.bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./public/build'));
      }

      const watcher = watchify(bundler);
      watcher.on('update', () => {
        console.log('Building...');
        buildBundle();
      });

      watcher.on('time', (buildTimeInMiliseconds) => {
        console.log(`Built in ${buildTimeInMiliseconds}ms`);
      });

      buildBundle();
    }));

function CreateBundler (isDebug) {
  const bundler = browserify('./src/scripts/application.js', {
    debug: isDebug,
    cache: {},
    noParse: ['jquery', 'jquery-ui', 'lodash']
  });

  bundler.transform(babelify);

  bundler.transform(browserifyCss, {
    global: true,
    rootDir: 'public',

    processRelativeUrl: function(realativePath) {
      const rootDir = path.resolve(process.cwd(), 'public');
      const prefix = path.join('..', 'node_modules');

      if(!_.startsWith(realativePath, prefix)) {
        console.log('Only in here!');
        return realativePath;
      }

      const vendorUrl = '/vendor/' + realativePath.substring(prefix.length);
      const sourceFile = path.join(rootDir, realativePath);
      const destFile = path.join(rootDir, vendorUrl);

      //console.log(`${sourceFile} --> ${destFile}`);
      fse.copy(sourceFile, destFile);

      return vendorUrl;
    }
  });

  return bundler;
}

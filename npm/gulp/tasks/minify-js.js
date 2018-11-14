/**
 * Task to minify js
 *
 */

module.exports = function(gulp, $, config, messages) {

  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  gulp.task('minify-js', function() {
    return gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.js.dest))
    .pipe($.notify(messages.success));
  });

};
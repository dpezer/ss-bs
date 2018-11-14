/**
 * Concat JS
 *
 */

module.exports = function(gulp, $, config, messages) {

  var concat = require('gulp-concat');

  gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.scripts.dest));
  });

};
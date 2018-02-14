/**
 * Task to compile stylesheets from Sass files.
 *
 * Tasks:
 * - Compiles stylesheets
 * - Autoprefixes
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function(gulp, $, config, messages) {
  gulp.task('styles', function() {
  	return gulp.src(config.sass.src)
  		.pipe($.plumber({
  			errorHandler: messages.error
  		}))
  		.pipe($.sass(config.sass.config))
  		.pipe($.autoprefixer({
  			browsers: config.sass.autoprefixer
  		}))
  		.pipe(gulp.dest(config.sass.destination))
  		.pipe($.notify(messages.success));
  });
};

/**
 * Watch for file changes and run tasks.
 *
 * Tasks:
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function(gulp, $, config, messages) {
  gulp.task('watch', function() {
  	// Watch for .scss files
  	gulp.watch(config.sass.src, ['styles']);
    // Watch for min css
    gulp.watch(config.css.src, ['minify-css']);
    // Concat
    gulp.watch(config.scripts.src, ['scripts']);
    // Watch for min js
    gulp.watch(config.js.src, ['minify-js']);
  });
};

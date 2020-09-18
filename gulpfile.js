const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const notify        = require('gulp-notify');
var replace         = require('gulp-replace');

const files = { 
    scssPath: 'app/scss/**/*.scss'
}

function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css'))
        .pipe(notify({
           title: 'Gulp',
           subtitle: 'success',
           message: 'Sass task',
           sound: "Pop"
        })
    );
}

function watchTask(){
    watch([files.scssPath],
        {interval: 1000, usePolling: true},
        series(
            parallel(scssTask)
        )
    );    
}

exports.default = series(
    parallel(scssTask),
    watchTask
);
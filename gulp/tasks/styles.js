/**
 * Created by wat on 01/06/2015.
 */
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var addsrc = require( 'gulp-add-src' );

gulp.task( 'styles', function () {
    return gulp.src( 'styles/**/*.css' )
        .pipe( concat( 'appstyles.css' ) )
        .pipe( gulp.dest( 'public/dist/styles' ) );
} );
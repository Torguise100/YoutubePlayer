/**
 * Created by wat on 01/06/2015.
 */
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var addsrc = require( 'gulp-add-src' );

gulp.task( 'libraries', function () {
    return gulp.src( 'bower_components/jquery/dist/jquery.min.js' )
        //production use ember.min.js
        .pipe( addsrc.append( 'bower_components/ember/ember.debug.js' ) )
        .pipe( addsrc.append( 'bower_components/ember-data/ember-data.min.js' ) )
        .pipe( concat( 'libraries.js' ) )
        .pipe( gulp.dest( 'public/dist/js' ) );
} );
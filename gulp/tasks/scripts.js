/**
 * Created by wat on 01/06/2015.
 */
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var addsrc = require( 'gulp-add-src' );
var browserify = require( 'browserify' );
var transform = require( 'vinyl-transform' );
var through2 = require( 'through2' );

gulp.task( 'scripts', [ 'templates' ], function () {
    return gulp.src( 'source/initializers/**/*.js' )
        .pipe( addsrc.append( 'source/mainapp/**/*.js' ) )
        .pipe( addsrc.append( 'source/components/**/*.js' ) )
        .pipe( through2.obj( function ( file, enc, next ) {
            browserify( file.path )
                .bundle( function ( err, res ) {
                    file.contents = res;
                    next( null, file );
                } );
        } ) )
        .pipe( addsrc.prepend( './source/templates/templates.js' ) )
        .pipe( concat( 'webapp.js' ) )
        .pipe( gulp.dest( 'public/dist/js' ) );
} );
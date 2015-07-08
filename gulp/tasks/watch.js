/**
 * Created by wat on 01/06/2015.
 */
var gulp = require( 'gulp' );

gulp.task( 'watch', function () {
    gulp.watch( 'styles/**/*.css', ['styles'] );
    gulp.watch( 'source/**/*.{js,hbs}', [ 'scripts' ] );
    //gulp.watch( 'tests/**/*.{js,hbs}', ['embertests'] );
} );
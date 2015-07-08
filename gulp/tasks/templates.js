/**
 * Created by wat on 01/06/2015.
 */
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var tap = require( 'gulp-tap' );
var htmlbars = require( 'gulp-htmlbars' );

var getTemplateNameFromPath = function ( path ) {
    // if exist replace \ with /
    while ( path.indexOf( "\\" ) !== -1 ) {
        path = path.replace( "\\", "/" );
    }

    var splitPath = path.split( "/" );
    var filenameWithExtension = splitPath[ splitPath.length - 1 ];
    var folderNameInWhichFileResides = splitPath[ splitPath.length - 2 ];
    var lastDotIndex = filenameWithExtension.lastIndexOf( "." );
    var filenameWithoutExtension = filenameWithExtension.substring( 0, lastDotIndex );

    var finalTemplateName = filenameWithoutExtension;
    if ( folderNameInWhichFileResides === "components" ) {
        finalTemplateName = "components/" + finalTemplateName;
    }

    return finalTemplateName;
};

gulp.task( 'templates', function () {
    return gulp.src( 'source/**/*.hbs' )
        .pipe( htmlbars( {
            isHTMLBars: true,
            templateCompiler: require( '../../bower_components/ember/ember-template-compiler' )
        } ) )
        .pipe( tap( function ( file ) {
            var templateName = getTemplateNameFromPath( file.path.toString() );
            var currentFile = file.contents.toString();
            currentFile = currentFile.replace( "export default",
                "Ember.TEMPLATES['" + templateName + "'] = " );
            file.contents = new Buffer( currentFile );
        } ) )
        .pipe( concat( 'templates.js' ) )
        .pipe( gulp.dest( 'source/templates' ) );
} );
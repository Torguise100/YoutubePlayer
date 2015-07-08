/**
 * Created by wat on 08/07/2015.
 */
App.Playlist = DS.Model.extend( {

    contentDetails: DS.attr(),

    confirmDelete: false,
    editing: false,
} );
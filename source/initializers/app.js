/**
 * Created by wat on 08/07/2015.
 */
App = Ember.Application.create( {
    rootElement: '#webapp'
} );

App.ApplicationAdapter = DS.RESTAdapter.extend( {
    namespace: '/YoutubePlayer/public/api'
} );

App.ApplicationStore = DS.Store.extend( {
    revision: 16,
    adapter: 'App.ApplicationAdapter'
} );
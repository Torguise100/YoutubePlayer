/**
 * Created by wat on 08/07/2015.
 */
/**
 * Created by wat on 01/06/2015.
 */
App.IndexRoute = Ember.Route.extend( {

    model: Ember.A(function(){
        var id = 'PL6tfF39y5tId7wzpMAhTnCv5NbNUUFa8U';
        return this.store.find('playlist', id);
    })

} );

App.IndexView = Ember.View.extend( {
    templateName: 'index',

    player: null,

    _this: this,

    didInsertElement: function(){
        if (typeof YT === "undefined") {
            var self = this;
            Ember.$.getScript("https://www.youtube.com/iframe_api").then(function(){
                window.onYouTubePlayerAPIReady = self.createPlayer.bind(self);
            });
        } else {
            this.createPlayer();
        }
    },

    createPlayer: function(){
        var player = new YT.Player('player', {
            width: 1024,
            height: 576,
            playervars:{
                origin: 'http://127.0.0.1',
            },
            events: {
                'onReady': this.onPlayerReady.bind(this),
                //'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this)
            }
        });

        this.set('player', player);
    },

    onPlayerReady: function(){
        var player = this.get('player');
        var index = this.get('controller.content.contentDetails.itemCount');

        console.log(this.get('controller.content.contentDetails.itemCount'));


        player.loadPlaylist({
            list: 'PL6tfF39y5tId7wzpMAhTnCv5NbNUUFa8U',
            listType: 'playlist',
            index:(index-1),
            suggestedQuality:'hd720'
        });
    },

    onPlayerError: function(event) {
        var errorCode = event.data;

        console.log(errorCode);

    }
} );

App.IndexController = Ember.Controller.extend( {

    actions: {

    }

} );
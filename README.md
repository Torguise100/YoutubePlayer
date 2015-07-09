# YoutubePlayer
Youtube Player example using Ember, Laravel and the iframe API

This package is just an example case project of using the iframe API with Ember and Laravel, 
not a package that is installed into an existing project.
In order to set up this project you will require Node.js Package Manager, Bower and Composer to install all the dependencies.

## Installation

First you will need to clone this project into your project directory. This example was developed using xampp so the
projects directory is: `C:/xampp/htdocs/`.

Clone into your projects directory using

`git clone https://github.com/Torguise100/YoutubePlayer.git`

Once cloned install all the dependencies used with Ember. 
To do this navigate to the top level of the project and use the following commands:
 
  1) `npm install`
  
  2) `bower install`
  

Next install the Laravel dependencies. Navigate to laravel using:

  `cd laravel/`
  
Then install the dependencies using composer:

  `composer install`
  
## Usage

There are 2 sides to this, you can either use just the ember front end in order to have the ember code generate your youtube player or you can have both to get access to the Youtube Data API if required. Skip the laravel step if you just want the front end.
To use this youtube player inside your own projects you will need to do the following:

### Laravel

1. Firstly make sure you have all the dependencies required for the youtube player project inside of your own project, this means the node modules, bower components. To access the Youtube Data API make sure you have the line: `"alaouy/youtube": "dev-master"` under require in your laravel composer.json file.
2. Once the dependencies are installed go into laravel and run the following command: 
 
  `php artisan vendor:publish`

This command will add the config files from the alaouy/youtube dependency into your project.
3. You will need an API key to access the Youtube Data API, one can be aquired by creating a project on: https://console.developers.google.com. If you already have one skip to step 6.
4. Once created go into the 'APIs & auth' tab (on the left) and then 'API'. Click on the Youtube Data API and then on the 'Enable API' button.
5. Once the API is enabled go into the 'credentials' and create a public access key which will generate an the API key.
6. In the laravel/config folder you should have a 'youtube.php' file, open this up and set the 'KEY' value to the API key from your google developers application.
7. Copy the YoutubeController from this project into your own controllers file in the laravel controllers folder, and add it to your laravel routes. You will need to run `composer dump-autoload` to make sure the contoller is added to your project correctly. 
 
This completes the laravel implementation.

### Ember

The side is the what creates the player and loads the playlist into the player.

1. copy the index.js ember view into the view of the page that you wish to contain your youtube player.

if you do not wish to access the Youtube API to get playlist data such as the number of videos you will not need to do the following steps.

2. Copy the index.js model into the route of the page that you wish to contain your youtube player.
3. inside of the page's template add a div with the id 'player', this may be changed as long as you change first parameter of the YT.player function to the same.
4. run the application, this should now start the playlist from the last video.

For those wishing to just create a player by code please change the index value in load playlist to the index which you wish your playlist to start from. If you wish to start from the beginning, set the index to 0.

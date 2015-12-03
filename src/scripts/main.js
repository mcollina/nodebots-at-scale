// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes')
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  runAllVideos
]);

function runAllVideos (bespoke) {
  bespoke.on('activate', function (slide) {
    console.log(slide)
  })
}

function startVideos () {
  var videos = document.getElementsByTagName("video")

  for (var i = 0; i < videos.length; i++) {
    videos[i].play()
  }
}

startVideos()

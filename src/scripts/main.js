// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes')
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  camera = require('bespoke-camera'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  camera({ width: "320px" }),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  runAllVideos
]);

function runAllVideos (bespoke) {
  bespoke.on('activate', function (slide) {
    var videos = slide.slide.getElementsByTagName("video")
    for (var i = 0; i < videos.length; i++) {
      videos[i].play()
    }
  })

  bespoke.on('deactivate', function (slide) {
    var videos = slide.slide.getElementsByTagName("video")
    for (var i = 0; i < videos.length; i++) {
      videos[i].pause()
    }
  })
}

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

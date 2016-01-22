// Karma configuration

module.exports = function(config) {
'use strict';

config.set({
  autoWatch: true,
  basePath: '../',

  frameworks: [
    "jasmine"
  ],

  files: [
    'client/lib/jquery/dist/jquery.js',
    'client/lib/angular/angular.js',
    'client/lib/angular-mocks/angular-mocks.js',
    "client/script/module/addTeam/addTeamController.js",
    "client/script/module/sideBar/sideBarController.js",
    "testing/spec/**/*.js"
  ],

  exclude: [],

  port: 8080,

  browsers: [
    "PhantomJS"
  ],

  plugins: [
    "karma-phantomjs-launcher",
    "karma-jasmine"
  ],

  singleRun: false,

  colors: true,

  logLevel: config.LOG_INFO,

});
};
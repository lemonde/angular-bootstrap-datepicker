module.exports = function (config) {
  config.set({
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    frameworks: ['mocha'],
    singleRun: false,
    autoWatch: true,
    colors: true,
    reporters: ['dots'],
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/moment/moment',

      'node_modules/lodash/dist/lodash.js',
      'node_modules/chai/chai.js',
      'node_modules/chai/chai.js',

      'node_modules/sinon/lib/sinon.js',
      'node_modules/sinon/lib/sinon/assert.js',
      'node_modules/sinon/lib/sinon/behavior.js',
      'node_modules/sinon/lib/sinon/call.js',
      'node_modules/sinon/lib/sinon/collection.js',
      'node_modules/sinon/lib/sinon/match.js',
      'node_modules/sinon/lib/sinon/spy.js',
      'node_modules/sinon/lib/sinon/mock.js',
      'node_modules/sinon/lib/sinon/stub.js',
      'node_modules/moment/moment.js',

      'node_modules/sinon-chai/lib/sinon-chai.js',

      'angular-bootstrap-datepicker.js',
      'test/*.js'
    ],
    logLevel: config.LOG_ERROR
  });
};
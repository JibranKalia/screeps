// import modules
var aiStart = require('ai.start');
var aiSpawn = require('ai.spawn');
var aiRun = require('ai.run');

module.exports.loop = function () {
    aiStart.init();
    aiSpawn.spawn();
    aiRun.run();
};

// import modules
var aiStart = require('ai.start');
var aiSpawn = require('ai.spawn');
var aiRun = require('ai.run');
var aiPlan = require('ai.plan');

module.exports.loop = function () {
    aiStart.init();
    aiPlan.plan();
    aiSpawn.spawn();
    aiRun.run();

};

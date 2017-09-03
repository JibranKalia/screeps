var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

module.exports.init = function(){
    if (!Memory.uuid || Memory.uuid > 100) {
        Memory.uuid = 0;
    }
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            console.log("Deleted " + name);
            delete Memory.creeps[name];
        }
    }
}

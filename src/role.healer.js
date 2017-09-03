var roleUpgrader = require('role.upgrader')

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.healing && creep.carry.energy == 0) {
            creep.memory.healing = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.healing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.healing = true;
	        creep.say('Healing');
	    }

	    if(creep.memory.healing) {
	        var targets = creep.room.find(FIND_STRUCTURES, {filter: function(structure){ return structure.hits < structure.hitsMax }})
            if(targets.length) {
                let closesttarget = creep.pos.findClosestByRange(targets);
                if(creep.repair(closesttarget) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closesttarget);
                }
            } else {
                roleUpgrader.run(creep);
            }
	    }
	    else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;

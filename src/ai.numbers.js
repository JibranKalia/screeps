require('prototype.spawn')();

module.exports.harvesters = function(){
	let energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < 4) {
		Game.spawns.Spawn1.createCustomCreep(energy, 'harvester');
    }
}

module.exports.upgraders = function(){
	let energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 2){
		Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader');
    }
}

module.exports.builders = function(){
	let energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(builders.length < 2){
		Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
    }
}

module.exports.repairers = function(){
	let energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    let healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    if(healers.length < 1){
		Game.spawns.Spawn1.createCustomCreep(energy, 'repairer');
    }
}

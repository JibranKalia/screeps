
require('prototype.spawn')();

module.exports.create = function() {
	var minimumNumberOfHarvesters = 2;
	var minimumNumberOfBuilders = 2;
	var minimumNumberOfUpgraders = 2;
	var minimumNumberOfRepairer = 0;

	// count the number of creeps alive for each role
	// _.sum will count the number of properties in Game.creeps filtered by the
	//  arrow function, which checks for the creep being a harvester
	var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
	var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
	var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
	var numberOfRepairer = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');

	var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
	var name = undefined;

	if (numberOfHarvesters == 0) {
		name = Game.spawns.Spawn1.createCustomCreep(
			Game.spawns.Spawn1.room.energyAvailable, 'harvester');
	}
	else if (numberOfHarvesters < minimumNumberOfHarvesters) {
		name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester');
	}
	else if (numberOfUpgraders < minimumNumberOfUpgraders) {
		name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader');
	}
	else if (numberOfBuilders < minimumNumberOfBuilders){
		name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
	}
	else {
		name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer');
	}

	if (!(name < 0)) {
		console.log("Spawned new creep: " + name);
		Memory.uuid = Memory.uuid + 1;
	}
};

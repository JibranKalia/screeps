require('prototype.spawn')();

module.exports.create = function() {
	var minimumNumberOfHarvesters = 5;
	var minimumNumberOfUpgraders = 5;
	var minimumNumberOfBuilders = 5;
	var minimumNumberOfHealers = 2;

	// count the number of creeps alive for each role
	// _.sum will count the number of properties in Game.creeps filtered by the
	//  arrow function, which checks for the creep being a harvester
	var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
	var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
	var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
	var numberOfHealers = _.sum(Game.creeps, (c) => c.memory.role == 'healer');

	var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
	var name = undefined;

	// if not enough harvesters
	if (numberOfHarvesters < minimumNumberOfHarvesters) {
		// try to spawn one
		name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester');
		// if spawning failed and we have no harvesters left
		if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
			// spawn one with what is available
			name = Game.spawns.Spawn1.createCustomCreep(
				Game.spawns.Spawn1.room.energyAvailable, 'harvester');
			}
		}
		// if not enough upgraders
		else if (numberOfUpgraders < minimumNumberOfUpgraders) {
			// try to spawn one
			name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader');
		}
		// if not enough repairers
		else if (numberOfRepairers < minimumNumberOfRepairers) {
			// try to spawn one
			name = Game.spawns.Spawn1.createCustomCreep(energy, 'healer');
		}
		// if not enough builders
		else if (numberOfBuilders < minimumNumberOfBuilders) {
			// try to spawn one
			name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
		}
		else {
			// else try to spawn a builder
			name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder');
		}

		if (!(name < 0)) {
			console.log("Spawned new creep: " + name);
		}
}

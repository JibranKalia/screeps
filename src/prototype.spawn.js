module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName, p_sourceId) {
            var uuid = Memory.uuid;
            var name = this.room.name + "-" + roleName + uuid;
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            var body = [WORK, CARRY, MOVE];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            var body2 = [WORK, CARRY, MOVE];

            var finalbody = (Game.gcl.level >= 3) ? body : body2;

            var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');

            if (numberOfHarvesters > 2 && roleName == 'harvester'){
                finalbody = [WORK, WORK, CARRY, MOVE];
            }
            if (numberOfHarvesters > 3 && energy >= 400 && roleName == 'harvester'){
                finalbody = [WORK, WORK, WORK, CARRY, MOVE];
            }
            // create creep with the created body and the given role
            if(this.canCreateCreep(finalbody, name, p_sourceId) == OK) {
                let creep = this.createCreep(finalbody, name, { role: roleName, room: this.room.name, working: false, sourceId: p_sourceId});
                console.log(name + " created");
                Memory.uuid = uuid + 1;
                return creep;
            }
        };
};

module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
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
            var body2 = [WORK, WORK, CARRY, MOVE];
            var finalbody =(Game.gcl.level >= 3) ? body : body2;

            // create creep with the created body and the given role
            if(this.canCreateCreep(finalbody, name) == OK) {
                let creep = this.createCreep(finalbody, name, { role: roleName, room: this.room.name, working: false});
                console.log(name + " created");
                Memory.uuid = uuid + 1;
                return creep;
            }
        };
};

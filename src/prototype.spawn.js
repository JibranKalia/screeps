module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
            let uuid = Memory.uuid;
            var name = this.room.name + "-" + roleName + uuid;
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role
            if(this.canCreateCreep(body, name) == OK) {
                let creep = this.createCreep(body, name, { role: roleName, room: this.room.name});
                console.log(name + " created");
                return creep;
                Memory.uuid = Memory.uuid + 1;
            }
        };
};

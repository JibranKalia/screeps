module.exports = {
    buildRoads: function(from, to)
    {
        var path = Game.spawns.Spawn1.room.findPath(from, to, { ignoreCreeps: true });
        for(var i in path) {
            var result = Game.spawns.Spawn1.room.createConstructionSite(path[i].x, path[i].y, STRUCTURE_ROAD);
        }
    },

    buildRoadToAllSources: function()
    {
        var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);

        for(var i in sources) {
            this.buildRoads(Game.spawns.Spawn1.pos, sources[i].pos);
        }
        Memory.buildRoadToAllSources = true;
    },

    buildRoadToController: function()
    {
        let controller = Game.spawns.Spawn1.room.controller;
        let source = controller.pos.findClosestByPath(FIND_SOURCES);
        if (source){
            this.buildRoads(controller.pos, source.pos);
        }
        Memory.buildRoadToController = true;
    },

    buildRoadAroundSpawn: function()
    {
        let spawn = Game.spawns.Spawn1;
        let x;
        let y;

        for (x = -2; x <= 2; x++){
            for (y = -2; y <= 2; y++){
                var result = Game.spawns.Spawn1.room.createConstructionSite(spawn.pos.x + x, spawn.pos.y + y, STRUCTURE_ROAD);
            }
        }
        Memory.buildRoadAroundSpawn = true;
    },
    buildRoadAroundController: function()
    {
        let controller = Game.spawns.Spawn1.room.controller;
        let x;
        let y;

        for (x = -2; x <= 2; x++){
            for (y = -2; y <= 2; y++){
                var result = Game.spawns.Spawn1.room.createConstructionSite(controller.pos.x + x, controller.pos.y + y, STRUCTURE_ROAD);
            }
        }
        Memory.buildRoadAroundController = true;
    },

    buildRoadAroundSource: function()
    {
        var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);
        let x;
        let y;

        for(var i in sources) {
            for (x = -2; x <= 2; x++){
                for (y = -2; y <= 2; y++){
                    var result = Game.spawns.Spawn1.room.createConstructionSite(sources[i].pos.x + x, sources[i].pos.y + y, STRUCTURE_ROAD);
                }
            }
        }
        Memory.buildRoadAroundSource = true;
    },

    buildExtensions: function()
    {
        var controller = Game.spawns.Spawn1.room.controller;
        for (x = -8; x <= 8; x += 2){
            for (y = -8; y <= 8; y += 2){
                var result = Game.spawns.Spawn1.room.createConstructionSite(controller.pos.x + x, controller.pos.y + y, STRUCTURE_EXTENSION);
                if (result == ERR_RCL_NOT_ENOUGH){
                    return result;
                }
                console.log(result);
            }
        }
    },
}

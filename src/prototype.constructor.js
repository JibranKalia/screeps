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
    },

    buildRoadToController: function()
    {
        let controller = Game.spawns.Spawn1.room.controller;
        let source = controller.pos.findClosestByPath(FIND_SOURCES);
        if (source){
            this.buildRoads(controller.pos, source.pos);
        }
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
    },

    buildExtensions: function()
    {
        var controller = Game.spawns.Spawn1.room.controller;
        var count;
        if (Game.gcl.level == 1){
            count = 5
        }
        for (let i = 0; i < count; i++)
        {
            var result = Game.spawns.Spawn1.room.createConstructionSite(controller.pos.x + i + 1, controller.pos.y + i + 1, STRUCTURE_EXTENSION);
            console.log(result);

        }
    },
}

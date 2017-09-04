var construct = require('prototype.constructor');

module.exports = {
    plan: function()
    {
        if (Game.gcl.level == 1)
        {
            if (Memory.buildRoadToAllSources == false){
                construct.buildRoadToAllSources();
            }
            if (Memory.buildRoadToController == false){
                Memory.buildRoadToController = false;
            }
            if (Memory.buildRoadAroundSource == false){
                construct.buildRoadAroundSource();
            }
            if (Memory.buildRoadAroundController == false){
                construct.buildRoadAroundController();
            }
            if (Memory.buildRoadAroundSpawn == false){
                construct.buildRoadAroundSpawn();
            }
        }
        if (Game.gcl.level >= 2){
            construct.buildExtensions();
        }

    },
    removeconstructionsites: function()
    {
        var sites = Game.spawns.Spawn1.room.find(FIND_MY_CONSTRUCTION_SITES);
        for (var i in sites)
        {
            sites[i].remove();
        }
    }
}

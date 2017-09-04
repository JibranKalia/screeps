var construct = require('prototype.constructor');

module.exports = {
    plan: function()
    {
        if (Game.gcl.level == 1)
        {
            construct.buildRoadToAllSources();
            construct.buildRoadToController();
            construct.buildRoadAroundSource();
            construct.buildRoadAroundController();
        }
        if (Game.gcl.level == 2){
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

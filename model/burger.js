var orm = require('../config/orm');

var burger = {
    //Get all burgers
    all: function(){
        return orm.selectAll();
    },
    //Create new burger
    create: function(name){
        return orm.insertOne(name);
    },
    //Update devoured burger
    update: async function(id){
        return orm.updateOne(id);
    }

}

module.exports = burger;
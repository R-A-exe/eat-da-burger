var orm = require('../config/orm');

var burger = {

    all: function(){
        return orm.selectAll();
    },

    create: function(name){
        return orm.insertOne(name);
    },

    update: async function(id){
        return await orm.updateOne(id);
    }

}

module.exports = burger;
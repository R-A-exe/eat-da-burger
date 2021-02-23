var connection = require('./connection');

var orm = {
    selectAll: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM burgers', (err, data) => {
                if (err) return (reject(err));
                return (resolve(data));
            });
        });
    },

    insertOne: function (name) {
        return new Promise(function (resolve, reject) {
            connection.query('INSERT INTO burgers VALUES(default, ? , false', name, (err) => {
                if (err) return (reject(err));
                return (resolve(true));
            });
        });
    },

    updateOne: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE burgers SET devoured = true WHERE id = ?', id, (err) => {
                if (err) return (reject(err));
                return (resolve(true));
            });
        });
    }
}


module.exports = orm;
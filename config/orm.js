var connection = require("../config/connection");

// selectAll()
// insertOne()
// updateOne()

var orm = { 
    selectAll: function(callback) {
        var query = "select * from burgers";
        connection.query(query, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },

    insertOne: function(burgerName, isDevoured) {
        var query = "insert into burgers (burger, devoured) values (??, ??)";
            //insert into burgers (burger, devoured) VALUES ("Big Boy", false);
            //console.log(queryString);
        connection.query(query, [burgerName, isDevoured], function(err) {
        if (err) throw err;
        });
    },

    updateOne: function(isDevoured, burgerName) {
        var query = "UPDATE burgers SET devoured = ?? WHERE burger = ??"
        connection.query(query, [isDevoured, burgerName], function(err) {
            if (err) throw err;
        });
    }
}

module.exports = orm;
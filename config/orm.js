var connection = require("connection");

// selectAll()
// insertOne()
// updateOne()

var orm = { 
    selectAll: function() {
        var query = "select * from burgers";
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(results);
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
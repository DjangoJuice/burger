var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    }
    
// These two need fixed still
    //orm.insertOne("burgerName", "isDevoured");
    
    //orm.updateOne("isDevoured", "burgername");
}



module.exports = burger;
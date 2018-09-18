var orm = require("orm");


orm.selectAll();

orm.insertOne("burgerName", "isDevoured");

orm.updateOne("isDevoured", "burgername");

module.exports = burger;
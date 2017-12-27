const Query = require('./querybuilder') //The Querybuilder library.
const query = new Query(); //new instance of Query to instantiate the function.
const qlibrary = require('./queries') //group of query objects.

console.log(query.queryBuilder(qlibrary.selectQueries.userQuery))
console.log(query.queryBuilder(qlibrary.selectQueries.departmentQuery))


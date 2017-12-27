function Query() {}

Query.prototype.queryBuilder = (qryObject) => {

    //parses out the query object
    this.selectValues = qryObject.selectVals
    this.filterValues = qryObject.filter || {}
    this.tableObject = qryObject.tables
    this.filter = qryObject.filtered || false

    //returns an array of Columns from the selectValues section of the query object.
    this.scon = function() {
        return Object.entries(this.selectValues).map(key => {return `${key[1]}`}).join(', ')
    }

    //returns an arry of Filter Values for the where statement from the filter section of 
    //the query object.
    this.fcon = function() {
        let svalues = Object.entries(this.filterValues)
        return `${svalues.map(key => {return `${key[0]} = ${key[1]}`}).join(', ')}`
    }

    //returns an array of tables to use from the tables section of the query object.
    this.tables = function() {
        return Object.entries(this.tableObject).map(key => {return `${key[0]}`})
    }
    
    //returns the query string.
    return `select ${this.scon()} from ${this.tables()} ${(this.filter ? 'where '  + this.fcon()  : '')}`
}

module.exports = Query

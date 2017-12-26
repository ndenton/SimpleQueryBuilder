function query(qryObject) {

    this.selectValues = qryObject.selectVals
    this.filterValues = qryObject.filter || {}
    this.tableObject = qryObject.tables
    this.filter = qryObject.filtered || false

    this.scon = function() {
        return Object.entries(this.selectValues).map(key => {return `${key[1]}`}).join(', ')
    }

    this.fcon = function() {
        let svalues = Object.entries(this.filterValues)
        return `${svalues.map(key => {return `${key[0]} = ${key[1]}`}).join(', ')}`
    }

    this.tables = function() {
        return Object.entries(this.tableObject).map(key => {return `${key[0]}`})
    }
    
    this.query = function() {
        return `select ${this.scon()} from ${this.tables()} ${(this.filter ? 'where '  + this.fcon()  : '')}`
    }
}

qry = {
    tables: {
        Users: {

        }
    }, 
    selectVals: {
        val1 : 'UserName',
        val2 : 'UserFName',
        val3 : 'UserLName'
    },
    filter: {
        UserName: `'bjones'`,
        UserFName: `'Bob'`,
        UserLName: `'Jones'`
    }, 
    filtered: true
}

const i = new query(qry)
console.log(i.query())

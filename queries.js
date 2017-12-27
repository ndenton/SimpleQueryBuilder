/*
A group of Query Objects. The Base Object looks like:

queryName: {
    tables: {
        tableName: {
            tableOptions
        }
    },
    selectVals: {
        values
    },
    filter: {
        columnName: Value
    },
    filtered: bool
}

filtered : true includes the where statement. The builder will parse
            out the where values from the filter section.
filtered : false will exclude the where statement.

selectVals: includes a keyed set of columns to query. Can be ammended with selectvals.key

filter: includes a set of columns and the values to filter on.

*/


const selectQueries = {
    userQuery : {
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
    },
    departmentQuery: {
        tables: {
            Departments: {
    
            }
        }, 
        selectVals: {
            val1 : 'DepartmentName',
            val2 : 'DepartmentManager',
            val3 : 'DepartmentDescription'
        },
        filter: {

        }, 
        filtered: false
    }
}


module.exports = {
    selectQueries: selectQueries
}
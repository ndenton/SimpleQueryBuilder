## Query Builder Example

This is a sample of a query builder function. The idea is pass in a query object:

    qry = {
        queryType: 'select',
        from: {
            Users: {

            }
        }, 
        values: {
            val1 : 'UserName',
            val2 : 'UserFName',
            val3 : 'UserLName'
        },
        where: {
            UserName: `'bjones'`,
            UserFName: `'Bob'`,
            UserLName: `'Jones'`
        }, 
        filtered: true
    }

And the function will return the SQL query for you.

    ​​​​​select UserName, UserFName, UserLName from Users where UserName = 'bjones', UserFName = 'Bob', UserLName = 'Jones'​​​​​

 With a pattern like this you can build multiple queries by creating only the query objects and passing them into the single value for the query string. 

 TODO:
 * Add GroupBy
 * Add OrderBy
 * Add Join Functionality via table options.

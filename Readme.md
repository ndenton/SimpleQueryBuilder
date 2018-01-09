## Query Builder Example

This is a sample of a query builder function. The idea is pass in a query object:

    qry = {
        queryType: 'select',
        from: {
            Users: {
                PK: "UserId"
            },
            Accounts: {
                PK: "AccountId",
                FK: {
                    Users: "ManagerId"
                }
            }
        }, 
        values: {
            Users: {
                val1: "UserName",
                val2: "UserFName",
                val3: "UserLName"
            },
            Accounts : {
                val1: "AccountId",
                val2: "AccountName"
            }
        },
        where: {
            Users: {
                UserName: `'bjones'`
            }        
        }, 
        filtered: true
    }

Returns

    select 
        Users.UserName, 
        Users.UserFName, 
        Users.UserLName, 
        Accounts.AccountId, 
        Accounts.AccountName 
    from 
        Accounts 
        join Users 
            on Accounts.ManagerId = Users.UserId 
    Where 
        Users.UserName = 'bjones'

 With a pattern like this you can build multiple queries by creating only the query objects and passing them into the single value for the query string. 

 TODO:
 * Add GroupBy
 * Add OrderBy
 * Add Join Functionality via table options.

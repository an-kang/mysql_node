const query = require('./connect')

module.exports = {

    async getUsers(){
        const sql = 'select * from users';
        return await query(sql)
    },
    
}
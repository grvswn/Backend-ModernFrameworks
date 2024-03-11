const bookshelf = require('../bookshelf')

const Member = bookshelf.model('Member', {
    tableName:'members'
});

module.exports = { Member };
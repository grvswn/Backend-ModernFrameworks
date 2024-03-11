const { Member } = require('../models');

const getMemberByID = async (memberId) => {
    return await Member.where({
        'id': parseInt(memberId)
    }).fetch({
        require: true
    });
};

const getAllMembers = async () => {
    return await Member.fetchAll();
};

module.exports = {
    getMemberByID, getAllMembers
};
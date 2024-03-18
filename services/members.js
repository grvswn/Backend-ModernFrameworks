const dataLayer = require('../dal/members');

const SgetMemberByID = function () {
    dataLayer.getMemberByID();
};

module.exports = {
    SgetMemberByID
};
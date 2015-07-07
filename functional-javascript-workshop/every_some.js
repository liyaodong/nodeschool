function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(function (val) {
      return goodUsers.map(function (goodVal) {
        return goodVal.id;
      }).indexOf(val.id) > -1;
    });
  };
}

module.exports = checkUsersValid;

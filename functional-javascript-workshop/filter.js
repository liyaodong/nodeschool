function getShortMessages(messages) {
  return messages.filter(function (val) {
    if(val.message.length < 50) return val.message;
  }).map(function (val) {
    return val.message;
  });

}

module.exports = getShortMessages;

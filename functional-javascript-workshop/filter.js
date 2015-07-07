function getShortMessages(messages) {
  var arr = [];
  messages.map(function (val) {
    if(val.message.length < 50) arr.push(val.message);
  });

  return arr;
}

module.exports = getShortMessages;

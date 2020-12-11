const { promowords } = require("./constants/promowords");

function containsStringInarray(arr, str) {
  return new RegExp(arr.join("|")).test(str);
}

function isPromoMessage(message) {
  return containsStringInarray(promowords, message.toLowerCase());
}

module.exports = {
  isPromoMessage,
};

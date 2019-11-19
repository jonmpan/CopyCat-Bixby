const { getVoiceChoices } = require("./lib/index.js");

module.exports.function = function getVoices () {
  return getVoiceChoices();
}

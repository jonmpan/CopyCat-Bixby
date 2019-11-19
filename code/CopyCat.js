var fail = require("fail");
var { getVoiceTTS, checkVoice } = require("./lib/index.js");

module.exports.function = function changeVoice(reset, resetInput, resetVoice, input, voice) {
  if (reset) {
    throw new fail.checkedError("Reset", "Reset", {});
  }
  if (resetInput) {
    throw new fail.checkedError("ResetInput", "ResetInput", {});
  }
  if (resetVoice) {
    throw new fail.checkedError("ResetVoice", "ResetVoice", {});
  }
  
  var dialog = true;
  if (input.length > 500) {
    dialog = false;
  }

  var chosenVoice = checkVoice(voice);
  if (chosenVoice) {
    chosenVoice = chosenVoice.display
  }

  return {
    text: input,
    speech: getVoiceTTS(voice, input),
    dialog: dialog,
    voice: chosenVoice
  };
}

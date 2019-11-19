const voices = [
  { voice: "Stephanie", locale: "en-US", profile: "F03", language: "English US", display: "Stephanie", portrait: "/flags/usa.png", description: "Something" },
  { voice: "John", locale: "en-US", profile: "M02", language: "English US", display: "John", portrait: "/flags/usa.png", description: "Something" },
  { voice: "Lisa", locale: "en-US", profile: "F05", language: "English US", display: "Lisa", portrait: "/flags/usa.png", description: "Something" },
  { voice: "Julia", locale: "en-US", profile: "F04", language: "English US", display: "Julia", portrait: "/flags/usa.png", description: "Something" },
  { voice: "Amy", locale: "en-GB", profile: "F02", language: "UK English", display: "Amy", portrait: "/flags/uk.png", description: "Something" },
  { voice: "Chris", locale: "en-GB", profile: "M02", language: "UK English", display: "Chris", portrait: "/flags/uk.png", description: "Something" },
  { voice: "윤정", locale: "ko-KR", profile: "F01", language: "Korean", display: "Esther", portrait: "/flags/korea.png", description: "Something" },
  { voice: "우호", locale: "ko-KR", profile: "M01", language: "Korean", display: "Eugene", portrait: "/flags/korea.png", description: "Something" },
  { voice: "유리", locale: "ko-KR", profile: "F04", language: "Korean", display: "Sarah", portrait: "/flags/korea.png", description: "Something" },
  { voice: "지훈", locale: "ko-KR", profile: "M02", language: "Korean", display: "Larry", portrait: "/flags/korea.png", description: "Something" },
  { voice: "두리", locale: "ko-KR", profile: "F05", language: "Korean", display: "Eunice", portrait: "/flags/korea.png", description: "Something" },
  { voice: "대휘", locale: "ko-KR", profile: "M03", language: "Korean", display: "Adam", portrait: "/flags/korea.png", description: "Something" },
  { voice: "张喆Zangzhe", locale: "zh-CN", profile: "F02", language: "Mandarin", display: "Azalea", portrait: "/flags/china.png", description: "Something" },
  // { voice: "王聪Wangcong", locale: "zh-CH", profile: "M02", language: "Mandarin", display: "Wangcong", portrait: "/flags/china.png", description: "Something" },
  // { voice: "Mujer", locale: "es-US", profile: "F01", language: "US Spanish", display: "Mujer", portrait: "/flags/mexico.png", description: "Something" },
  { voice: "Marie", locale: "de-DE", profile: "F01", language: "Germany", display: "Mary", portrait: "/flags/germany.png", description: "Something" },
  { voice: "Jan", locale: "de-DE", profile: "M01", language: "Germany", display: "William", portrait: "/flags/germany.png", description: "Something" },
  { voice: "Sandra", locale: "es-ES", profile: "F01", language: "Spanish", display: "Sandra", portrait: "/flags/spain.png", description: "Something" },
  { voice: "David", locale: "es-ES", profile: "M01", language: "Spanish", display: "David", portrait: "/flags/spain.png", description: "Something" },
  { voice: "Louise", locale: "fr-FR", profile: "F01", language: "French", display: "Michelle", portrait: "/flags/france.png", description: "Something" },
  { voice: "Valentin", locale: "fr-FR", profile: "M01", language: "French", display: "Pierre", portrait: "/flags/france.png", description: "Something" },
  { voice: "Angela", locale: "it-IT", profile: "F01", language: "Italian", display: "Angela", portrait: "/flags/italy.png", description: "Something" },
  { voice: "Andrea", locale: "it-IT", profile: "M01", language: "Italian", display: "Andrea", portrait: "/flags/italy.png", description: "Something" },
]

const randomizeVoice = (inputString) => {
  var voice = voices[Math.floor(Math.random() * voices.length)];

  return "<speak><lang xml:lang=\"" + voice.locale + "\" voice=\"" + voice.voice + "\"  profile=\"" + voice.profile + "\">" + inputString + "</lang></speak>"
}

const getVoiceTTS = (voice, inputString) => {
  var thisVoice = checkVoice(voice)
  if (thisVoice) {
    return "<speak><lang xml:lang=\"" + thisVoice.locale + "\" voice=\"" + thisVoice.voice + "\"  profile=\"" + thisVoice.profile + "\">" + inputString + "</lang></speak>"
  }
  return inputString
}

const checkVoice = (voice) => {
  if (voice) {
    voice = voice.toString().toLowerCase()
    return voices.find(o => {
      return o.display.toLowerCase() == voice.toLowerCase();
    })
  }
  return null;
}

const getVoiceChoices = () => {
  return voices.map(o => {
    return {
      voice: o.display,
      language: o.language,
      description: o.description,
      portrait: o.portrait ? o.portrait : null
    }
  })
}

module.exports = {
  getVoiceTTS: getVoiceTTS,
  checkVoice: checkVoice,
  getVoiceChoices: getVoiceChoices,
}
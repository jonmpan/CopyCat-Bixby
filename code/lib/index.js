const voices = [
  { voice: "Stephanie", locale: "en-US", profile: "F03", language: "English US", display: "Stephanie", image: "/flags/usa.png"},
  { voice: "John", locale: "en-US", profile: "M02", language: "English US", display: "John", image: "/flags/usa.png"},
  { voice: "Lisa", locale: "en-US", profile: "F05", language: "English US", display: "Lisa", image: "/flags/usa.png"},
  { voice: "Julia", locale: "en-US", profile: "F04", language: "English US", display: "Julia", image: "/flags/usa.png"},
  { voice: "Amy", locale: "en-GB", profile: "F02", language: "UK English", display: "Amy", image: "/flags/uk.png"},
  { voice: "Chris", locale: "en-GB", profile: "M02", language: "UK English", display: "Chris", image: "/flags/uk.png"},
  { voice: "윤정", locale: "ko-KR", profile: "F01", language: "Korean", display: "Esther", image: "/flags/korea.png"},
  { voice: "우호", locale: "ko-KR", profile: "M01", language: "Korean", display: "Eugene", image: "/flags/korea.png"},
  { voice: "유리", locale: "ko-KR", profile: "F04", language: "Korean", display: "Sarah", image: "/flags/korea.png"},
  { voice: "지훈", locale: "ko-KR", profile: "M02", language: "Korean", display: "Larry", image: "/flags/korea.png"},
  { voice: "두리", locale: "ko-KR", profile: "F05", language: "Korean", display: "Eunice", image: "/flags/korea.png"},
  { voice: "대휘", locale: "ko-KR", profile: "M03", language: "Korean", display: "Adam", image: "/flags/korea.png"},
  { voice: "张喆Zangzhe", locale: "zh-CN", profile: "F02", language: "Mandarin", display: "Fanny", image: "/flags/china.png"},
  // { voice: "王聪Wangcong", locale: "zh-CH", profile: "M02", language: "Mandarin", display: "Wangcong", image: "/flags/china.png"},
  // { voice: "Mujer", locale: "es-US", profile: "F01", language: "US Spanish", display: "Mujer", image: "/flags/mexico.png"},
  { voice: "Marie", locale: "de-DE", profile: "F01", language: "Germany", display: "Mary", image: "/flags/germany.png"},
  { voice: "Jan", locale: "de-DE", profile: "M01", language: "Germany", display: "William", image: "/flags/germany.png"},
  { voice: "Sandra", locale: "es-ES", profile: "F01", language: "Spanish", display: "Sandra", image: "/flags/spain.png"},
  { voice: "David", locale: "es-ES", profile: "M01", language: "Spanish", display: "David", image: "/flags/spain.png"},
  { voice: "Louise", locale: "fr-FR", profile: "F01", language: "French", display: "Michelle", image: "/flags/france.png"},
  { voice: "Valentin", locale: "fr-FR", profile: "M01", language: "French", display: "Pierre", image: "/flags/france.png"},
  { voice: "Angela", locale: "it-IT", profile: "F01", language: "Italian", display: "Angela", image: "/flags/italy.png"},
  { voice: "Andrea", locale: "it-IT", profile: "M01", language: "Italian", display: "Andrea", image: "/flags/italy.png"},
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
      image: o.image ? o.image : null
    }
  })
}

module.exports = {
  getVoiceTTS: getVoiceTTS,
  checkVoice: checkVoice,
  getVoiceChoices: getVoiceChoices,
}
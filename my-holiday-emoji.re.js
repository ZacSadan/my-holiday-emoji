const EMOJI_RULES = [
  
  // https://github.com/commenthol/date-holidays/tree/master/data/countries

  // Universal-ish
  { re: /\bnew year'?s\b/i, emojis: ["🥂"] },
  { re: /\bchristmas\b/i, emojis: ["🎅"] },
  { re: /\bgood friday\b/i, emojis: ["✝️"] },
  { re: /\beaster\b/i, emojis: ["🐣"] },
  { re: /\blabor day\b/i, emojis: ["🧰"] },
  { re: /\bworkers'? day\b/i, emojis: ["🧰"] },
  { re: /\bthanksgiving\b/i, emojis: ["🦃"] },
  { re: /\bvalentine'?s\b/i, emojis: ["💘"] },
  { re: /\bmother'?s day\b/i, emojis: ["💐"] },
  { re: /\bfather'?s day\b/i, emojis: ["👔"] },
  { re: /\bvictory day\b/i, emojis: ["🎖️"] },
  { re: /\bwomen'?s day\b/i, emojis: ["🌷"] },  

  // US
  { country: "US" , re: /\bmartin luther king\b/i, emojis: [ "🕊️"] },
  { country: "US" , re: /\bpresidents'? day\b/i, emojis: ["🏛️"] },
  { country: "US" ,  re: /\bmemorial day\b/i, emojis: ["🕯️"] },
  { country: "US" , re: /\bjuneteenth\b/i, emojis: ["✊🏿"] },
  { country: "US" , re: /\bveterans day\b/i, emojis: ["🪖"] },
  { country: "US" , re: /independence day/i, emojis: ["🗽"] },
  

  // Canada
  { country: "CA" , re: /\bcanada day\b/i, emojis: ["🍁"] },
  { country: "CA" , re: /\bvictoria day\b/i, emojis: ["👑"] },
  { country: "CA" , re: /\bremembrance day\b/i, emojis: ["🌹"] },

  // UK (GB)
  { country: "GB" , re: /\bboxing day\b/i, emojis: [ "🥊"] },
  { country: "GB" , re: /\bbank holiday\b/i, emojis: ["🏦"] },
  { country: "GB" , re: /independence day/i, emojis: ["🏰"] },

  // Germany
  { country: "DE" , re: /\bgerman unity day\b/i, emojis: ["🤝"] },
  { country: "DE" , re: /\bday of german unity\b/i, emojis: ["🤝"] },
  { country: "DE" , re: /\breformation day\b/i, emojis: ["⛪"] },
  { country: "DE" , re: /independence day/i, emojis: ["🎊"] },

  // Ukraine
  { country: "UA" , re: /\bconstitution day\b/i, emojis: ["📜"] },
  { country: "UA" , re: /\bdefender(s)? of ukraine\b/i, emojis: ["🛡️"] },
  { country: "UA" , re: /independence day/i, emojis: ["🔱"] },

  // India
  { country: "IN" , re: /\brepublic day\b/i, emojis: ["🏛️"] },
  { country: "IN" , re: /\bgandhi jayanti\b/i, emojis: ["🕊️"] },
  { country: "IN" , re: /\bdiwali\b/i, emojis: ["✨"] },
  { country: "IN" , re: /\bholi\b/i, emojis: ["🎨"] },
  { country: "IN" , re: /independence day/i, emojis: ["✨"] },

  // Israel / Jewish holidays (names often appear as transliterations)
  { country: "IL" , re: /\brosh hashanah\b/i, emojis: ["🍎"] },
  { country: "IL" , re: /\byom kippur\b/i, emojis: ["🕯️"] },
  { country: "IL" , re: /\bsukkot\b/i, emojis: ["🌿"] },
  { country: "IL" , re: /\bsimchat torah\b/i, emojis: ["📜"] },
  { country: "IL" , re: /\bhanukkah\b/i, emojis: ["🕎"] },
  { country: "IL" , re: /\bpurim\b/i, emojis: ["🎭"] },
  { country: "IL" , re: /\bpassover\b/i, emojis: ["🍷"] },
  { country: "IL" , re: /\bshavuot\b/i, emojis: ["🌾"] },
  { country: "IL" , re: /\btu bi(sh)?vat\b/i, emojis: ["🌳"] },
  { country: "IL" , re: /holocaust remembrance/i, emojis: ["🕯️"] },
  { country: "IL" , re: /independence day/i, emojis: ["✨"] },
  { country: "IL" , re: /yom hazikaron/i, emojis: ["🕯️"] },
  { country: "IL" , re: /jerusalem day/i, emojis: ["🕌"] },
  { country: "IL" , re: /lag b['']?aomer/i, emojis: ["🔥"] },
  
];

export default EMOJI_RULES;

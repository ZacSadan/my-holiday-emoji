const EMOJI_RULES = [
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
  { re: /\bmartin luther king\b/i, emojis: [ "🕊️"] },
  { re: /\bpresidents'? day\b/i, emojis: ["🏛️"] },
  { re: /\bmemorial day\b/i, emojis: ["🕯️"] },
  { re: /\bjuneteenth\b/i, emojis: ["✊🏿"] },
  { re: /\bveterans day\b/i, emojis: ["🪖"] },
  //🗽

  // Canada
  { re: /\bcanada day\b/i, emojis: ["🍁"] },
  { re: /\bvictoria day\b/i, emojis: ["👑"] },
  { re: /\bremembrance day\b/i, emojis: ["🕯️"] },

  // UK (GB)
  { re: /\bboxing day\b/i, emojis: [ "🥊"] },
  { re: /\bbank holiday\b/i, emojis: ["🏦"] },

  // Germany
  { re: /\bgerman unity day\b/i, emojis: ["🤝"] },
  { re: /\bday of german unity\b/i, emojis: ["🤝"] },
  { re: /\breformation day\b/i, emojis: ["⛪"] },

  // Ukraine
  { re: /\bconstitution day\b/i, emojis: ["📜"] },
  { re: /\bdefender(s)? of ukraine\b/i, emojis: ["🛡️"] },

  // India
  { re: /\brepublic day\b/i, emojis: ["🏛️"] },
  { re: /\bgandhi jayanti\b/i, emojis: ["🕊️"] },
  { re: /\bdiwali\b/i, emojis: ["✨"] },
  { re: /\bholi\b/i, emojis: ["🎨"] },

  // Israel / Jewish holidays (names often appear as transliterations)
  { re: /\brosh hashanah\b/i, emojis: ["🍎"] },
  { re: /\byom kippur\b/i, emojis: ["🕯️"] },
    { re: /\bsukkot\b/i, emojis: ["🌿"] },
    { re: /\bsimchat torah\b/i, emojis: ["📜"] },
  { re: /shmini atzeret/i, emojis: ["📜"] },
  { re: /\bhanukkah\b/i, emojis: ["🕎"] },
  { re: /\bpurim\b/i, emojis: ["🎭"] },
  { re: /\bpassover\b/i, emojis: ["🍷"] },
  { re: /\bpesach\b/i, emojis: ["🍷"] },
  { re: /\bshavuot\b/i, emojis: ["🌾"] },
  { re: /\btu bi(sh)?vat\b/i, emojis: ["🌳"] },
  { re: /yom hash?oah/i, emojis: ["🕯️"] },
  { re: /holocaust remembrance/i, emojis: ["🕯️"] },
  { re: /yom ha('?a)?tzmaut/i, emojis: ["✨"] },
  { re: /independence day.*israel|israel.*independence/i, emojis: ["✨"] },
  { re: /yom hazikaron/i, emojis: ["🕯️"] },
  { re: /fallen soldiers/i, emojis: ["🕯️"] },
  { re: /yom yerushalayim/i, emojis: ["🕌"] },
  { re: /jerusalem day/i, emojis: ["🕌"] },
  { re: /lag b['']?aomer/i, emojis: ["🔥"] },
  
];

export default EMOJI_RULES;

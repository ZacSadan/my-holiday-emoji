const EMOJI_RULES = [
  
  // list of holidays per country :
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
  { re: /independence day/i, emojis: ["🌟"] },

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
  { country: "DE" , re: /independence day/i, emojis: ["🌟"] },

  // Ukraine
  { country: "UA" , re: /\bconstitution day\b/i, emojis: ["📜"] },
  { country: "UA" , re: /\bdefender(s)? of ukraine\b/i, emojis: ["🛡️"] },
  { country: "UA" , re: /independence day/i, emojis: ["🔱"] },

  // India
  { country: "IN" , re: /\brepublic day\b/i, emojis: ["🏛️"] },
  { country: "IN" , re: /\bgandhi jayanti\b/i, emojis: ["🕊️"] },
  { country: "IN" , re: /\bdiwali\b/i, emojis: ["✨"] },
  { country: "IN" , re: /\bholi\b/i, emojis: ["🎨"] },
  { country: "IN" , re: /independence day/i, emojis: ["🌟"] },

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
  { country: "IL" , re: /independence day/i, emojis: ["🌟"] },
  { country: "IL" , re: /yom hazikaron/i, emojis: ["🕯️"] },
  { country: "IL" , re: /jerusalem day/i, emojis: ["🕌"] },
  { country: "IL" , re: /lag b['']?aomer/i, emojis: ["🔥"] },

  // Japan
  { country: "JP", re: /\bcoming of age day\b/i, emojis: ["👘"] },
  { country: "JP", re: /\bfoundation day\b/i, emojis: ["🏯"] },
  { country: "JP", re: /\bemperor'?s birthday\b/i, emojis: ["👑"] },
  { country: "JP", re: /\bspring equinox\b/i, emojis: ["🌸"] },
  { country: "JP", re: /\bshowa day\b/i, emojis: ["🌸"] },
  { country: "JP", re: /\bgreenery day\b/i, emojis: ["🌿"] },
  { country: "JP", re: /\bconstitution day\b/i, emojis: ["📜"] },
  { country: "JP", re: /\bchildren'?s day\b/i, emojis: ["🎏"] },
  { country: "JP", re: /\bmarine day\b/i, emojis: ["🌊"] },
  { country: "JP", re: /\bmountain day\b/i, emojis: ["🗻"] },
  { country: "JP", re: /\brespect.?for.?the.?aged day\b/i, emojis: ["🎑"] },
  { country: "JP", re: /\bautumnal equinox\b/i, emojis: ["🍂"] },
  { country: "JP", re: /\bsports day\b/i, emojis: ["🏅"] },
  { country: "JP", re: /\bculture day\b/i, emojis: ["🎎"] },
  { country: "JP", re: /\blabor thanksgiving day\b/i, emojis: ["🌾"] },
  { country: "JP", re: /\benthronement( ceremony)?( day)?\b/i, emojis: ["👑"] },
  { country: "JP", re: /\bcoronation day\b/i, emojis: ["👑"] },
  { country: "JP", re: /\bseven.five.three festival\b/i, emojis: ["🎋"] },

  // Argentina
  { country: "AR", re: /\bday of remembrance for truth and justice\b/i, emojis: ["🕯️"] },
  { country: "AR", re: /\bveterans.*(malvinas|fallen)\b/i, emojis: ["🎖️"] },
  { country: "AR", re: /\bfirst national government\b/i, emojis: ["🏛️"] },
  { country: "AR", re: /\bnational flag day\b/i, emojis: ["🚩"] },
  { country: "AR", re: /independence day/i, emojis: ["🌟"] },
  { country: "AR", re: /\bgüemes\b/i, emojis: ["⚔️"] },
  { country: "AR", re: /\bsan mart[ií]n\b/i, emojis: ["⚔️"] },
  { country: "AR", re: /\b(day of the race|cultural diversity)\b/i, emojis: ["🌍"] },
  { country: "AR", re: /\bnational sovereignty\b/i, emojis: ["📜"] },
  { country: "AR", re: /\bmay revolution\b/i, emojis: ["🌅"] },
  { country: "AR", re: /\bnational census\b/i, emojis: ["📊"] },

  // Greece
  { country: "GR", re: /\bepiphany\b/i, emojis: ["✝️"] },
  { country: "GR", re: /\b(clean monday|ash monday)\b/i, emojis: ["🪁"] },
  { country: "GR", re: /\bannunciation\b/i, emojis: ["🕊️"] },
  { country: "GR", re: /\b1821 revolution\b/i, emojis: ["🔵"] },
  { country: "GR", re: /\bwhit monday\b/i, emojis: ["🌬️"] },
  { country: "GR", re: /\bascension\b/i, emojis: ["☁️"] },
  { country: "GR", re: /\bassumption\b/i, emojis: ["🌺"] },
  { country: "GR", re: /\b(oxi day|ochi day|επέτειος|national holiday)\b/i, emojis: ["🌟"] },
  { country: "GR", re: /independence day/i, emojis: ["🏛️"] },

  // Poland
  { country: "PL", re: /\bepiphany\b/i, emojis: ["✝️"] },
  { country: "PL", re: /\bcursed soldiers\b/i, emojis: ["🪖"] },
  { country: "PL", re: /\bbaptism of poland\b/i, emojis: ["⛪"] },
  { country: "PL", re: /\bwarsaw ghetto uprising\b/i, emojis: ["🕯️"] },
  { country: "PL", re: /\bflag day\b/i, emojis: ["🚩"] },
  { country: "PL", re: /\bconstitution day\b/i, emojis: ["📜"] },
  { country: "PL", re: /\bnational victory day\b/i, emojis: ["🕊️"] },
  { country: "PL", re: /\bchildren'?s day\b/i, emojis: ["🎈"] },
  { country: "PL", re: /\bwarsaw uprising\b/i, emojis: ["⚓"] },
  { country: "PL", re: /\bassumption\b/i, emojis: ["🌺"] },
  { country: "PL", re: /\b(solidarity and freedom|day of solidarity)\b/i, emojis: ["✊"] },
  { country: "PL", re: /\bworld war\b.*\banniversary\b|\banniversary\b.*\bworld war\b/i, emojis: ["🕯️"] },
  { country: "PL", re: /\bsoviet invasion\b/i, emojis: ["🕯️"] },
  { country: "PL", re: /\ball saints'? day\b/i, emojis: ["🕯️"] },
  { country: "PL", re: /independence day/i, emojis: ["🦅"] },
  { country: "PL", re: /\bsaint nicholas day\b/i, emojis: ["🎁"] },
  { country: "PL", re: /\bgreater poland uprising\b/i, emojis: ["⚔️"] },
  { country: "PL", re: /\bcorpus christi\b/i, emojis: ["✝️"] },
  { country: "PL", re: /\bwhit sunday\b|\bpentecost\b/i, emojis: ["🌬️"] },
  { country: "PL", re: /\bascension\b/i, emojis: ["☁️"] },
  { country: "PL", re: /\bfat thursday\b/i, emojis: ["🍩"] },

];

export default EMOJI_RULES;

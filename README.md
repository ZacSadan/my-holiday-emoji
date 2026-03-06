# my-holiday-emoji
A GeoIP-free solution for injecting regional holiday emojis into login UI via client-side locale detection.

How?
- detect the current user country from the user TimeZone (Javascript)
- fetch all country holidays for the current user detected country 
- find today's ( or next few days ) holidays ( in english only )
- match relevant emojis for these holidays ( using the my-holiday-emoji.re.js file )
- "draw" the relevat emojis on user HTML page ( usually login page )
- user engagement and happiness goes up ! 😊
  
**Integration Example:**
```
import ct from "https://cdn.jsdelivr.net/npm/countries-and-timezones@3.8.0/+esm";
import Holidays from "https://cdn.jsdelivr.net/npm/date-holidays@3.26.8/+esm";

import MyHolidayEmoji from "https://cdn.github.com/npm/my-holiday-emoji.re.js";
import HOLIDAYS_TO_EMOJIES_LIST from "https://cdn.github.com/npm/my-holiday-emoji.js";

// can choose only desired values , no parameter = all
mhe = new MyHolidayEmoji({"","public","bank","optional","school","observance"});

// search holidays in the next few days. default value = 0 (only today)
mhe.setDaysAhead(3);

// set diffrent days ahead for matching for spcific pre-defined holiday
mhe.setHolidayDaysAhread(/\bchristmas\b/i,14);   
mhe.setHolidayDaysAhread(/\bnew year'?s\b/i,14); 

// draw all matched emojis for next few days.
// on hover of the specific emoji - you will be able to see the name of the holiday
// possible values :
// bg : draw as low opacity all over the html background
// pacman : draw as random 1-2 moving emojis all over html
// snow: draw the emojies as falking snow from the top of the page
// hideall : hide all drawing
mhe.draw("bg"); 

// customizations
mhe.setEmoji(/\bchristmas\b/i,"🎄" );


// // only for debugging / test page. test page contains:
// 4 buttons to set mhe.draw() function
// date picker + country picker
// log box for console.log() after each function call

// can access test page at : https://raw.githack.com/ZacSadan/my-holiday-emoji/main/test.html

// can set diffrent country
mhe.setCountry("US") ;
// can set diffrent date 
mhe.setDate("2025-03-25");

// calc current country, unless set by setCountry function
country = mhe.getCountry();
// calc current emojis, consider setCountry/setDate if setted
emojiList = mhe.getEmojis();


```

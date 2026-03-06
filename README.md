# my-holiday-emoji
A GeoIP-free solution for injecting regional holiday emojis into login UI via client-side locale detection.

How?
- detect the current user country from the user TimeZone (Javascript)
- fetch all country holidays
- find today's ( or next few days ) holidays
- match relevant emojis for these holidays
- "draw" the relevat emojis on user HTML page ( usually login page )

**Integration Example:**
```
import ct from "https://cdn.jsdelivr.net/npm/countries-and-timezones@3.8.0/+esm";
import Holidays from "https://cdn.jsdelivr.net/npm/date-holidays@3.26.8/+esm";
import MyHolidayEmoji from "https://cdn.github.com/npm/my-holiday-emoji.re.js";
import HOLIDAYS_TO_EMOJIES_LIST from "https://cdn.github.com/npm/my-holiday-emoji.js";


mhe = new MyHolidayEmoji( {"public",""} ); // possible values : "",'public','bank','optional','school','observance'
mhe.setDaysAhead(3); // search holidays in the next few days. default value = 0 (only today)
mhe.setHolidayDaysAhread(/\bchristmas\b/i,14);   // set diffrent days ahead for matching for spcific pre-defined holiday
mhe.setHolidayDaysAhread(/\bnew year'?s\b/i,14); // set diffrent days ahead for matching for spcific pre-defined holiday

// draw all matched emojis for next few days.
// on hover of the specific emoji - you will be able to see the name of the holiday
// possible values :
// bg : draw as low opacity all over the html background
// pacman : draw as random 1-2 moving emojis all over html
// snow: draw the emojies as falking snow from the top of the page
// hideall : hide all drawing
mhe.draw("bg"); 

// only for debugging / test page
mhe.setCountry("US") ; // can set diffrent country
mhe.setDate("2025-03-25"); // can set diffrent date 

// customizations
mhe.setEmoji(/\bchristmas\b/i,"🎅" );



```

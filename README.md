# 🎉 my-holiday-emoji : Celebrate with your users: Automatically inject holiday-themed emojis based on the user's local calendar.

> **A GeoIP-free solution for injecting regional holiday emojis into your login UI — powered entirely by client-side locale detection. Privacy-aware : No servers. No IP lookups. Just the browser's timezone → country → holidays → emojis. User happiness goes up. 😊**


For years, we’ve celebrated the holiday season by adding subtle **snow emojis** to our interface in the **weeks leading up to the New Year**. 

The response was incredible—users felt more **connected to the platform and engagement spiked**.

Inspired by this success, we are expanding this initiative to celebrate a diverse range of **global holidays and cultural events throughout the year**.

---

## How it works

```
browser timezone  →  country code  →  public holidays  →  matched emojis  →  draw on page
```

1. Detects the user's **country** from `Intl.DateTimeFormat` timezone (no GeoIP needed)
2. Fetches all **national holidays** for that country via [`date-holidays`](https://github.com/commenthol/date-holidays)
3. Finds holidays **today** (or in the next N days)
4. Matches relevant **emojis** using regex rules in `my-holiday-emoji.re.js`
5. **Draws** the emojis on the page — as background, falling snow, or drifting animation

---

## Live Demo

[**Open test page →**](https://raw.githack.com/ZacSadan/my-holiday-emoji/main/test.html)

---

## draw("snow") Example

<img src="images/HolidayEmoji.gif" height="500">

## draw("bg") Example

<img src="images/bg.jpg" height="500">

---

## Quick Start

```html
<script type="module">
  import MyHolidayEmoji from "https://raw.githack.com/ZacSadan/my-holiday-emoji/main/my-holiday-emoji.js";

  const mhe = new MyHolidayEmoji();
  mhe.draw("snow");
</script>
```

That's it. The library auto-detects the country and today's date and holiday.

---

## Full Example

```js
import MyHolidayEmoji from "https://raw.githack.com/ZacSadan/my-holiday-emoji/main/my-holiday-emoji.js";

const mhe = new MyHolidayEmoji(["public", "bank"]);

mhe.setDaysAhead(7); 

// Start showing Christmas decorations 2 weeks early
mhe.setHolidayDaysAhread(/\bchristmas\b/i, 14);
mhe.setHolidayDaysAhread(/\bnew year'?s\b/i, 14);

// Custom emoji override
mhe.setEmoji(/\bchristmas\b/i, "🎄");

// Draw as falling snow
mhe.draw("snow");
```

---

## API Reference

### `new MyHolidayEmoji(types?)`

Creates a new instance. Optionally filter which holiday types to consider.

```js
// All holiday types (default)
const mhe = new MyHolidayEmoji();

// Only specific types
const mhe = new MyHolidayEmoji(["public", "bank", "optional", "school", "observance"]);
```

---

### `.draw(mode)`

Renders emojis on the page. Calling `draw()` again with a different mode replaces the previous one.

| Mode | Effect |
|---|---|
| `"bg"` | Scattered emojis behind the page at low opacity |
| `"snow"` | Emojis fall from the top of the page |
| `"pacman"` | 1–2 emojis drift horizontally across the screen |
| `"hideall"` | Removes all drawn emojis |

> Hover over any emoji to see the holiday name as a tooltip.

```js
mhe.draw("bg");
mhe.draw("snow");
mhe.draw("pacman");
mhe.draw("hideall");
```

---

### `.getEmojis()`

Returns the matched holidays and their emojis for the current country/date window.

```js
const results = mhe.getEmojis();
// [{ name: "Christmas Day", date: "2025-12-25", emojis: ["🎅"] }, ...]
```

---

### `.getCountry()`

Returns the detected (or overridden) country code.

```js
const country = mhe.getCountry(); // e.g. "US", "DE", "IL"
```

---

### `.setDaysAhead(n)`

Look ahead N days from today when searching for holidays. Default is `0` (today only).

```js
mhe.setDaysAhead(3); // match holidays in the next 3 days
```

---

### `.setHolidayDaysAhread(regex, n)`

Override the lookahead window for a specific holiday matched by regex.

```js
mhe.setHolidayDaysAhread(/\bchristmas\b/i, 14);  // show 🎅 starting 14 days before Christmas
mhe.setHolidayDaysAhread(/\bnew year'?s\b/i, 14);
```

---

### `.setEmoji(regex, emoji)`

Override the emoji for any holiday matched by regex.

```js
mhe.setEmoji(/\bchristmas\b/i, "🎄"); // replace default 🎅 with 🎄
```

---

### `.setCountry(code)`

Override the auto-detected country.

```js
mhe.setCountry("DE"); // Germany
```

---

### `.setDate(dateStr)`

Override today's date (useful for testing).

```js
mhe.setDate("2025-12-25");
```

---

## Example for Chrome/Console injection

```js

const { default: MyHolidayEmoji } = await import("https://raw.githack.com/ZacSadan/my-holiday-emoji/main/my-holiday-emoji.js");
const mhe = new MyHolidayEmoji();
mhe.setDaysAhead(14); 
mhe.setCountry("US");
mhe.setDate("2025-12-20");
mhe.draw("snow");


```

---

## Holiday Coverage

Emojis are matched by regex rules in [`my-holiday-emoji.re.js`](my-holiday-emoji.re.js). Currently covers:

| Region | Holidays |
|---|---|
| Universal | New Year's, Christmas, Easter, Valentine's Day, Mother's/Father's Day, Labour Day, Thanksgiving |
| 🇺🇸 United States | MLK Day, Presidents' Day, Memorial Day, Juneteenth, Veterans Day |
| 🇨🇦 Canada | Canada Day, Victoria Day, Remembrance Day |
| 🇬🇧 United Kingdom | Boxing Day, Bank Holidays |
| 🇩🇪 Germany | German Unity Day, Reformation Day |
| 🇺🇦 Ukraine | Constitution Day, Defender's Day |
| 🇮🇳 India | Republic Day, Gandhi Jayanti, Diwali, Holi |
| 🇮🇱 Israel | Rosh Hashanah, Yom Kippur, Hanukkah, Passover, Purim, and more |

Adding new rules is as simple as adding a line to `my-holiday-emoji.re.js`.

---

## Files

| File | Purpose |
|---|---|
| [`my-holiday-emoji.js`](my-holiday-emoji.js) | Main library — `MyHolidayEmoji` class |
| [`my-holiday-emoji.re.js`](my-holiday-emoji.re.js) | Holiday → emoji regex rules |
| [`test.html`](test.html) | Interactive debug/test page |

---

## Dependencies

Loaded automatically via CDN — no install needed.

- [`date-holidays`](https://github.com/commenthol/date-holidays) — holiday data for 200+ countries
- [`countries-and-timezones`](https://github.com/manuelmhtr/countries-and-timezones) — timezone → country mapping

---

## License

[MIT](LICENSE)

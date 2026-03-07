import ct from "https://cdn.jsdelivr.net/npm/countries-and-timezones@3.8.0/+esm";
import Holidays from "https://cdn.jsdelivr.net/npm/date-holidays@3.26.8/+esm";
import EMOJI_RULES from "./my-holiday-emoji.re.js";

export default class MyHolidayEmoji {
  constructor(types) {
    // types: array/set of holiday types to include, e.g. ["public","bank"]
    // undefined/null/empty = include all types
    this._types = types && types.length ? new Set(types) : null;
    this._daysAhead = 0;
    this._perHolidayDaysAhead = []; // [{re, n}]
    this._emojiOverrides = [];      // [{re, emoji}]
    this._countryOverride = null;
    this._dateOverride = null;
    this._lastEmojis = [];
    this._drawMode = null;
  }

  setDaysAhead(n) {
    this._daysAhead = n;
  }

  setHolidayDaysAhread(re, n) {
    this._perHolidayDaysAhead.push({ re, n });
  }

  setEmoji(re, emoji) {
    this._emojiOverrides.push({ re, emoji });
  }

  setCountry(code) {
    this._countryOverride = code || null;
  }

  setDate(dateStr) {
    // accepts "YYYY-MM-DD" or null to reset
    this._dateOverride = dateStr || null;
  }

  getCountry() {
    if (this._countryOverride) return this._countryOverride;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const countries = ct.getCountriesForTimezone(tz);
      if (countries && countries.length) return countries[0].id;
    } catch (e) {
      // fall through
    }
    return "US"; // safe default
  }

  getEmojis() {
    const country = this.getCountry();
    const baseDate = this._dateOverride ? new Date(this._dateOverride + "T00:00:00") : new Date();
    // Normalize to midnight local time
    baseDate.setHours(0, 0, 0, 0);

    const hd = new Holidays(country);
    const year = baseDate.getFullYear();

    // Collect holidays for this year and next (handles year-boundary lookahead)
    let candidates = [
      ...(hd.getHolidays(year) || []),
      ...(hd.getHolidays(year + 1) || []),
    ];

    // Filter by type if specified
    if (this._types) {
      candidates = candidates.filter(h => this._types.has(h.type));
    }

    const results = [];

    for (const holiday of candidates) {
      const hDate = new Date(holiday.start || holiday.date);
      hDate.setHours(0, 0, 0, 0);

      // Determine lookahead for this holiday
      let window = this._daysAhead;
      for (const override of this._perHolidayDaysAhead) {
        const name = holiday.name || "";
        if (override.re.test(name)) {
          window = override.n;
          break;
        }
      }

      const windowEnd = new Date(baseDate);
      windowEnd.setDate(windowEnd.getDate() + window);

      if (hDate >= baseDate && hDate <= windowEnd) {
        const name = holiday.name || "";
        const emojis = this._resolveEmojis(name);
        if (emojis.length) {
          results.push({ name, date: holiday.date || holiday.start, emojis });
        }
      }
    }

    this._lastEmojis = results;
    console.log("[MyHolidayEmoji] getEmojis() →", JSON.stringify(results));
    return results;
  }

  _resolveEmojis(name) {
    const matched = [];
    for (const rule of EMOJI_RULES) {
      if (rule.re.test(name)) {
        // Check for override
        let overrideEmoji = null;
        for (const ov of this._emojiOverrides) {
          if (ov.re.test(name)) {
            overrideEmoji = ov.emoji;
            break;
          }
        }
        if (overrideEmoji) {
          matched.push(overrideEmoji);
        } else {
          matched.push(...rule.emojis);
        }
      }
    }
    return matched;
  }

  draw(mode) {
    this._drawMode = mode;
    this._clearLayer();
    if (mode === "hideall") return;

    const emojiList = this._lastEmojis.length ? this._lastEmojis : this.getEmojis();
    const allEmojis = emojiList.flatMap(h => h.emojis.map(e => ({ emoji: e, name: h.name })));
    if (!allEmojis.length) {
      console.log("[MyHolidayEmoji] draw(): no emojis to draw");
      return;
    }

    this._ensureStyles();
    const layer = document.createElement("div");
    layer.id = "mhe-layer";
    document.body.appendChild(layer);

    if (mode === "bg") this._drawBg(layer, allEmojis);
    else if (mode === "snow") this._drawSnow(layer, allEmojis);
    else if (mode === "pacman") this._drawPacman(layer, allEmojis);

    console.log(`[MyHolidayEmoji] draw("${mode}") → ${allEmojis.length} emoji(s)`);
  }

  _clearLayer() {
    const existing = document.getElementById("mhe-layer");
    if (existing) existing.remove();
  }

  _makeSpan(emoji, name) {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.title = name;
    return span;
  }

  _drawBg(layer, allEmojis) {
    layer.style.cssText = "position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;";
    const count = Math.max(20, allEmojis.length * 6);
    for (let i = 0; i < count; i++) {
      const item = allEmojis[i % allEmojis.length];
      const span = this._makeSpan(item.emoji, item.name);
      span.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        font-size:${2 + Math.random() * 2}rem;
        opacity:0.15;
        pointer-events:none;
        user-select:none;
      `;
      layer.appendChild(span);
    }
  }

  _drawSnow(layer, allEmojis) {
    layer.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;";
    const count = Math.max(15, allEmojis.length * 4);
    for (let i = 0; i < count; i++) {
      const item = allEmojis[i % allEmojis.length];
      const span = this._makeSpan(item.emoji, item.name);
      const duration = 4 + Math.random() * 5;
      const delay = Math.random() * 4;
      span.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        top:-5%;
        font-size:${1.5 + Math.random() * 1.5}rem;
        opacity:${0.6 + Math.random() * 0.4};
        pointer-events:none;
        user-select:none;
        animation:mhe-fall ${duration.toFixed(1)}s ${delay.toFixed(1)}s linear infinite;
      `;
      layer.appendChild(span);
    }
  }

  _drawPacman(layer, allEmojis) {
    layer.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;";
    const count = Math.min(2, allEmojis.length);
    for (let i = 0; i < count; i++) {
      const item = allEmojis[i % allEmojis.length];
      const span = this._makeSpan(item.emoji, item.name);
      const duration = 6 + Math.random() * 6;
      const top = 10 + Math.random() * 80;
      const reverse = i % 2 === 1 ? "reverse" : "normal";
      span.style.cssText = `
        position:absolute;
        top:${top}%;
        font-size:2.5rem;
        pointer-events:none;
        user-select:none;
        animation:mhe-drift ${duration.toFixed(1)}s linear infinite ${reverse};
      `;
      layer.appendChild(span);
    }
  }

  _ensureStyles() {
    if (document.getElementById("mhe-styles")) return;
    const style = document.createElement("style");
    style.id = "mhe-styles";
    style.textContent = `
      @keyframes mhe-fall {
        from { transform: translateY(-5vh); }
        to   { transform: translateY(105vh); }
      }
      @keyframes mhe-drift {
        from { left: -5%; }
        to   { left: 105%; }
      }
    `;
    document.head.appendChild(style);
  }
}

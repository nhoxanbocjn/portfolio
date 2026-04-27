#!/usr/bin/env node
/**
 * Auto-translate EN strings to VI using DeepL Free API.
 * Run: node scripts/translate.js
 *
 * - Only translates string values — arrays, numbers, booleans are skipped.
 * - Existing VI strings are preserved (not overwritten) unless you pass --force.
 * - Writes result back to src/translations/index.js.
 */

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const fs = require("fs");
const path = require("path");

const API_KEY = process.env.DEEPL_API_KEY;
const TRANSLATIONS_PATH = path.resolve(__dirname, "../src/translations/index.js");
const FORCE = process.argv.includes("--force");

if (!API_KEY) {
  console.error("Missing DEEPL_API_KEY in .env");
  process.exit(1);
}

async function deepl(text) {
  const res = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [text],
      source_lang: "EN",
      target_lang: "VI",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepL error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.translations[0].text;
}

async function translateObject(en, vi, forceAll = false) {
  const result = Array.isArray(en) ? [] : {};

  for (const key of Object.keys(en)) {
    const enVal = en[key];
    const viVal = vi ? vi[key] : undefined;

    if (typeof enVal === "string") {
      if (!forceAll && viVal && viVal !== enVal) {
        // already has a real VI translation — keep it
        result[key] = viVal;
      } else {
        process.stdout.write(`  translating "${key}"... `);
        result[key] = await deepl(enVal);
        console.log(`done`);
      }
    } else if (Array.isArray(enVal)) {
      result[key] = [];
      for (let i = 0; i < enVal.length; i++) {
        const item = enVal[i];
        const viItem = viVal ? viVal[i] : undefined;
        if (typeof item === "string") {
          if (!forceAll && viItem && viItem !== item) {
            result[key].push(viItem);
          } else {
            process.stdout.write(`  translating "${key}[${i}]"... `);
            result[key].push(await deepl(item));
            console.log("done");
          }
        } else if (typeof item === "object") {
          result[key].push(await translateObject(item, viItem, forceAll));
        } else {
          result[key].push(item);
        }
      }
    } else if (typeof enVal === "object" && enVal !== null) {
      result[key] = await translateObject(enVal, viVal, forceAll);
    } else {
      result[key] = enVal;
    }
  }

  return result;
}

function serialize(obj, indent = 2) {
  const pad = " ".repeat(indent);
  const entries = Object.entries(obj).map(([k, v]) => {
    if (typeof v === "string") return `${pad}${k}: ${JSON.stringify(v)}`;
    if (Array.isArray(v)) {
      const items = v
        .map((item) =>
          typeof item === "object"
            ? `{\n${Object.entries(item)
                .map(([ik, iv]) => `${pad}    ${ik}: ${JSON.stringify(iv)}`)
                .join(",\n")}\n${pad}  }`
            : JSON.stringify(item)
        )
        .join(`,\n${pad}  `);
      return `${pad}${k}: [\n${pad}  ${items},\n${pad}]`;
    }
    if (typeof v === "object" && v !== null) {
      return `${pad}${k}: {\n${serialize(v, indent + 2)}\n${pad}}`;
    }
    return `${pad}${k}: ${JSON.stringify(v)}`;
  });
  return entries.join(",\n");
}

(async () => {
  const raw = fs.readFileSync(TRANSLATIONS_PATH, "utf8");

  // Dynamically load current translations
  const mod = require(TRANSLATIONS_PATH);
  const translations = mod.default || mod;
  const { en, vi } = translations;

  console.log(`\nTranslating EN → VI${FORCE ? " (force mode)" : " (preserving existing VI)"}...\n`);

  const newVi = await translateObject(en, vi, FORCE);

  const output = `const translations = {\n  en: {\n${serialize(en, 4)},\n  },\n\n  vi: {\n${serialize(newVi, 4)},\n  },\n};\n\nexport default translations;\n`;

  fs.writeFileSync(TRANSLATIONS_PATH, output, "utf8");
  console.log("\nDone. translations/index.js updated.");
})();

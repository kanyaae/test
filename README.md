# SlipBook Pro Max

A browser-based accounting and statement management app with a Thai-first interface.

## Features

- Track income and expenses, with categories, projects, and tax fields.
- Import bank statements from text-based PDF files or CSV/Excel spreadsheets.
- Review statement opening and closing balances, carry balances between months, and flag possible duplicates.
- Create savings goals and track progress without changing transaction totals.
- Generate reports and tax invoices, and back up or restore app data.
- **Mandatory PIN gate (v5)** — every page load or refresh asks for the PIN before the app is usable; first visit forces PIN setup (or an explicit skip). Wrong PIN 5 times = 30-second cooldown.
- **Auto-lock & quick lock** — idle auto-lock (1 / 5 / 15 minutes, default 5) plus a one-tap lock button in the toolbar and `Ctrl/⌘ + L`.
- Lock the app with a PIN — stored data is encrypted at rest with AES-GCM (where the browser supports WebCrypto), and backups include slip images.
- Installable PWA (`manifest.json` + `icon.svg`) with a new "Neon Glass" theme and Prompt / Noto Sans Thai typography.
- Keyboard shortcuts: `Alt + 1…8` switch pages, `Ctrl/⌘ + K` search, `?` shows the shortcut list.
- Switch between Thai and English, and dark and light themes.

## Run locally

Serve this folder with any static web server and open `Html.html`. For example, use the Live Server extension in Visual Studio Code.

The app loads several libraries from CDNs, so an internet connection is required for those features.

## Tests

```bash
npm i -D jsdom
node tests/lock-gate.test.mjs
```

`tests/lock-gate.test.mjs` runs a jsdom smoke test of the PIN gate: first-run setup, keypad input, wrong/correct PIN, re-lock on refresh, data still readable after unlock, and the 5-attempt / 30-second cooldown (which survives a reload).

## Deploy

The site is deployed on Vercel as a static project; `vercel.json` rewrites `/` to `Html.html`.

Production URL: https://slipbook-pro-max.vercel.app

## Data and privacy

Transactions and settings are stored in the browser on the current device. They are not synced to a server. Browser storage is not encrypted, so this app should not be treated as secure storage for sensitive financial information. Use the built-in backup feature to export your data regularly.

## License

Released under the MIT License. See [LICENSE](./LICENSE).

# SlipBook Pro Max

A browser-based accounting and statement management app with a Thai-first interface.

## Features

- Track income and expenses, with categories, projects, and tax fields.
- Import bank statements from text-based PDF files or CSV/Excel spreadsheets.
- Review statement opening and closing balances, carry balances between months, and flag possible duplicates.
- Create savings goals and track progress without changing transaction totals.
- Generate reports and tax invoices, and back up or restore app data.
- Switch between Thai and English, and dark and light themes.

## Run locally

Serve this folder with any static web server and open `Html.html`. For example, use the Live Server extension in Visual Studio Code.

The app loads several libraries from CDNs, so an internet connection is required for those features.

## Data and privacy

Transactions and settings are stored in the browser on the current device. They are not synced to a server. Browser storage is not encrypted, so this app should not be treated as secure storage for sensitive financial information. Use the built-in backup feature to export your data regularly.

## License

Released under the MIT License. See [LICENSE](./LICENSE).

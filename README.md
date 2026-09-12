# nekcah

Two small JavaScript scripts written for a login/security challenge (from the
Developer Akademie course). They demonstrate, for learning purposes, how a
weak login page can be probed — a brute-force password generator and a simple
path-discovery scanner.

> For educational use only. Run these only against systems you own or are
> explicitly permitted to test.

## Contents

- **`boot-force-algorithm.js`** — a brute-force routine that walks through every
  combination of a character set (up to eight positions) and compares each
  attempt against the target password, counting how many tries it takes to
  "crack" it.
- **`find-path.js`** — iterates over a list of common URL paths (`/admin`,
  `/api`, `/login`, `/wp-admin`, …) and `fetch`es each one against a base URL,
  logging the HTTP status so reachable endpoints can be spotted.

## Tech

- Plain JavaScript (browser / dev-console oriented, uses `fetch`)

## Usage

These are illustrative scripts rather than a finished tool.

- `find-path.js` can be pasted into a browser console (or run against a page):
  set `BASE_URL` to the target and it logs each path with its response status.
- `boot-force-algorithm.js` sketches the combination-generation logic; it
  references UI elements from the original challenge (`tbxEntPassword`,
  `listPossible`, …) and is meant to be read and adapted rather than run as-is.

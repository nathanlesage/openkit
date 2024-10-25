<center>
  <img src="assets/openkit.svg" alt="OpenKit Logo" height="100">
</center>

# OpenKit

> OpenKit is a collection of small FOSS web-tools. Anything you sometimes need
> but for which you don't need any dedicated app. It's your app directory for
> tiny tasks. [Launch it here](https://openkit.eu/).

OpenKit is a search engine and registry for small web-based tools that run in
your browser. Search for the tools you need, and launch them directly from the
website.

## Suggesting New Tools

This project relies on a community to suggest new tools to add. Here's the
requirements:

* It must run in a modern browser (no download)
* It should serve a single, small task, following the [UNIX philosophy](https://linux.die.net/Linux-CLI/c1089.htm)
* It should provide a reasonably well thought-out UI that helps non-technical
  users to understand and use the tool
* It must work for free (freemium options with ads or a paid pro version are
  allowed, but remember that it must be small, so no Canva or similar "big"
  tools)

Of course, we're happy to add tools that you've built by yourself, too!

## Adding New Tool Descriptors

To actually add a tool that fulfills the aforementioned requirements, you simply
need to adapt the appropriate YAML file in the `_data`-directory and propose a
Pull Request. Here's what data is required:

* **Name**: The tool's name
* **Author**: The author name (either an individual or an organization)
* **Author Website**: A website to the author
* **Link**: The actual link to the tool
* **Source** (optional): If applicable, enter the repository link for the source
  code
* **Synopsis**: A (very!) short summary of what the tool does
* **Category**: The category this tool fits into (if it fits into multiple ones,
  decide on one, it's merely for filtering). Allowed values are:
  * `business`: Small aids for business-related tasks (e.g., QR code generators)
  * `development`: Small developer tools
  * `writing`: Tools for writing processes (e.g., Pandoc helpers)
  * `office`: Office tools (calendar apps, notes, etc.)
  * `graphics`: Graphics and design-related tools (color wheels, etc.)
  * `productivity`: Productivity tools (e.g., Pomodoro timers)
* **Tags**: A list of keywords that can help find this tool
* **Description**: A longer description of what the tool offers
* **Mobile**: Whether the app works on mobile. A few issues here and there are
  acceptible for desktop-first tools, but these should never impede the workflow
* **Type**: What type of app it is. Allowed values are:
  * `open-source`: It's an open source app (includes "source-available")
  * `proprietary`: It's a closed-source app
* **Ads**: Whether the app displays advertisements
* **Premium**: Whether the app provides some additional features behind a
  paywall (remember that the relevant functionality must be free)
* **Local**: Does the tool work entirely offline, or is a connection to some
  server required (some things can't be done in plain JavaScript)

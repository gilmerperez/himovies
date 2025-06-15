Refactor api.js:

- Make api key really hidden and turn this project into a server
- Most fetch calls assume success (await fetch(), then .json()). You might consider adding basic error handling in key places (e.g., if (!response.ok) throw new Error()), especially in public API functions, to fail gracefully or retry.
- If you want to optimize, you can cache the genre maps in a module-level variable so you don't fetch the same genre list repeatedly. This is optional, but can reduce API calls
- Add define default parameters for consistency (page1, page2, etc)

Make search bar on home screen work

Make FAQ Section in Home page

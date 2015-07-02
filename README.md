# plangrid-specford
Repo for the Integration Bot From The Future

For complete details on using Specford:

https://github.com/robrobbins/specford/blob/master/README.md

This repository will hold the specs and compiled scripts specific to PlanGrid testing.

Refer to this getting started page for help in setting up your computer to run locally.

https://plangrid.jiveon.com/docs/DOC-1537

## Best Practices

- Tests should be short
- Keep lines under 80 columns in width
- Only use what the user has available in the webpage
- Only use one `visit` per line
- Vocabulary of the language is limited on purpose
- Indent under `query` statements for further functions

## Vocabulary

`visit URL` : Visit specified URL

`query CSS-SELECTOR:` : Testing will be done on specific section of document.  Use `query body:`for most testing needs.

### 3 termed functions

`fill 'CSS-SELECTOR' 'STRING'`: Fill in a text field or area (defined with CSS-SELECTOR) with STRING.

`click selector 'a[href="foo/bar"]'`: Click element that is clickable (a, button, img, etc.)

`capture FORMAT 'STRING'`: Capture a screenshot with filename STRING and format of FORMAT.  Available formats are `jpg`, `jpeg`, or `png`.

`text 'STRING' exists` or `selector 'CSS-SELECTOR' doesNotExist`: Test if a string or selector exists or not.  A passing test would mean that the statement evaluates to TRUE.

`3 '.foo' exist`: CSS selector foo exists exactly three times.  If .foo exists 2 or 4 times, it fails.

`<4 '.bar' exist`: CSS selector bar exists less than 4 times.

`>5 '.baz' exist`: CSS selector bar exists more than 5 times.

`url contains 'STRING': Find string in the URL.  Only use when navigation should have resulted in a new view.

### 4 termed functions (rare)

`after selector `.foo` exists`:  Wait for a thing to appear (to exist or be visible)





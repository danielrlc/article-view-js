# Article View docs

## Running the app

This app uses [this Express proxy server app](https://github.com/danielrlc/express-cors-proxy-server) to make API calls, to avoid CORS issues. Follow the [instructions here](https://github.com/danielrlc/express-cors-proxy-server/blob/main/README.md) to get that app set up.

Then load up `index.html` from this app in your browser.

## Project notes

### Accessibility

Running a Lighthouse test on [this page](https://www.hbl.fi/artikel/sista-debatten-trump-biden-kan-avgora-valet-vagmastarstaterna-har-overraskat-forr/) flagged up a number of accessibility issues.

#### Issue 1: "Heading elements are not in a sequentially-descending order"

Problem:

Here is a subheading from that page:

```html
<strong class="subheadline1">Ingen garanti</strong>
```

Solution:

```html
<h2 class="subheadline1">Ingen garanti</h2>
```

#### Issue 2: "Image elements do not have [alt] attributes"

Problem:

```html
<div class="ksf-article-images">
  <!-- ... image and caption in separate divs, caption in a <p> tag, and missing alt attribute ... -->
</div>
```

Solution:

```html
<figure>
  <img src="..." alt="Belmont University ..."
  <figcaption>Belmont University ...</figcaption>
</figure>
```

This follows advice from [<figure>: The Figure with Optional Caption element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)


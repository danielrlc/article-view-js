# Project notes and docs

## Running the app

This app uses [this Express proxy server app](https://github.com/danielrlc/express-cors-proxy-server) to make API calls, to avoid CORS issues. Follow the [instructions here](https://github.com/danielrlc/express-cors-proxy-server/blob/main/README.md) to get that app set up.

Then load up `index.html` from this app in your browser.

## Technology choices

I decided to use just CSS and JavaScript to build this app, and not a JavaScript or CSS framework. Here is the pros and cons of that approach:

### Pure CSS and JavaScript - pros

- best way to demonstrate my understanding of both these languages
- create a solution with just my own code
- a good way to get to grips with KSF's technology

### Pure CSS and JavaScript - cons

- JavaScript-heavy solution, so probable SEO implications

### Brief thoughts on using frameworks

If I was building a larger, production-ready app, I would probably choose either [Express](https://expressjs.com/), [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Next.js could be a good choice as it does server-side rendering, which would be good for both SEO and progressive enhancement. That said, I believe Express could also handle this well. Meanwhile, Tailwind is my CSS framework of choice, as you can customise it very deeply, and have far fewer specificity problems, which are common in CSS.

## Code formatting

The HTML, CSS and JavaScript files have all been formatted with Prettier, using its standard rules and no customisation. An empty `.prettierrc` has been added in the root folder. This SHOULD override Prettier customisations set up, for example, in a text editor like VS Code. (However, this needs to be tested.)

## Changes from hbl.fi site

### Header font

I didn't use the same header font, as it appeared to be a premium you have to pay for.

## CSS and accessibility notes

Running a Lighthouse test on [this page](https://www.hbl.fi/artikel/sista-debatten-trump-biden-kan-avgora-valet-vagmastarstaterna-har-overraskat-forr/) flagged up a number of accessibility issues.

### Issue 1: "Heading elements are not in a sequentially-descending order"

Problem:

Here is a subheading from that page:

```html
<strong class="subheadline1">Ingen garanti</strong>
```

Solution:

```html
<h2 class="subheadline1">Ingen garanti</h2>
```

### Issue 2: "Image elements do not have [alt] attributes"

Problem:

```html
<div class="ksf-article-images">
  <!-- ... image and caption in separate divs, caption in a <p> tag, and missing alt attribute ... -->
</div>
```

Solution:

```html
<figure>
  <img src="..." alt="Belmont University ..." />
  <figcaption>Belmont University ...</figcaption>
</figure>
```

This follows advice from [The Figure with Optional Caption element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

### Line-height

Following this advice: [line-height - Accessibility concerns - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#accessibility_concerns)

... I switched from this line-height:

```css
p {
  font-size: 15px;
  line-height: 22px;
}
```
... to this unitless line-height:

```css
p {
  font-size: 15px;
  line-height: 1.5;
}
```



### Media queries

(Potential) problem:

These two rulesets both apply at 768px, a popular screen width for mobile devices. This means that if CSS rulesets change position in the code, the final ruleset which overrides any previous rulesets could change, leading to bugs.

```css
@media (min-width: 768px) {
  /* styles here */
}

@media (max-width: 768px) {
  /* styles here */
}
```

Solution:

I removed the overlap like this:

```css
@media (min-width: 769px) {
  ...;
}
@media (max-width: 768px) {
  ...;
}
```

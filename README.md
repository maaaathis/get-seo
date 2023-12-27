# get-seo

This npm package provides a simple implementation for getting the seo title and description of a website.

## Installation

```shell
npm i get-seo
```

## Example usage

```javascript
const { getSEO } = require('get-seo');

// ...

const seoGetter = new getSEO('https://www.example.com');

const title = await seoGetter.getTitle();
const description = await seoGetter.getDescription();

// ...
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

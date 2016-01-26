# angular-camelize-filter

AngularJS filter to convert strings to **lower camel case** replacing non-alphanumeric characters.

## Installation

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install angular-camelize-filter
```

Or [npm](https://www.npmjs.com/):

```bash
$ npm install angular-camelize-filter
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-camelize-filter/camelize.js"></script>
<script src="node_modules/angular-camelize-filter/camelize.js"></script>
```

And inject the module `puigcerber.camelize` as a dependency of your application:

```js
angular.module('webApp', ['puigcerber.camelize']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ input | camelize }}</p>
```

### Example

```js
var camelized = $filter('camelize')('angular-camelize-filter');
console.log(camelized); // angularCamelizeFilter
```

## Related

* [capitalize](https://github.com/Puigcerber/angular-capitalize-filter): 
AngularJS filter to capitalize sentences and specially team names.
* [lowerize](https://github.com/Puigcerber/angular-lowerize-filter): 
AngularJS filter to convert strings to lower case replacing non-alphanumeric characters.

## License

MIT © [Pablo Villoslada Puigcerber](http://pablovilloslada.com)

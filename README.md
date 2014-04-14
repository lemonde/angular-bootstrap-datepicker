# angular-bootstrap-datepicker

[![Build Status](https://travis-ci.org/lemonde/angular-bootstrap-datepicker.svg?branch=master)](https://travis-ci.org/lemonde/angular-bootstrap-datepicker)
[![Dependency Status](https://david-dm.org/lemonde/angular-bootstrap-datepicker.svg?theme=shields.io)](https://david-dm.org/lemonde/angular-bootstrap-datepicker)
[![devDependency Status](https://david-dm.org/lemonde/angular-bootstrap-datepicker/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/angular-bootstrap-datepicker#info=devDependencies)

Bootstrap datepicker directive for Angular.

Added feature :

 * an 'ISOString' format

## Install

### Using bower

```sh
bower install https://github.com/lemonde/angular-bootstrap-datepicker.git
```

## Usage

### Resources setup

 1. Integrate the CSS stylesheet `components/bootstrap-datepicker/css/datepicker3.css`
 1. Integrate the datepicker js code `components/bootstrap-datepicker/js/bootstrap-datepicker.js`
 1. (optional) integrate desired datepicker translations `components/bootstrap-datepicker/js/locales/bootstrap-datepicker.fr.js`

### Directive instanciation

In controller :

``` javascript
angular
.module('xyz', [
  ...
  'bootstrap-datepicker',
```

In view :
```html
<input bootstrap-datepicker required type="text" class="form-control"
placeholder="JJ/MM/AAAA"
ng-model="editionDate"
date-format="ISOString"
ng-disabled="defaultMetadata" />
```

See available features http://bootstrap-datepicker.readthedocs.org/en/release/options.html

## License

MIT
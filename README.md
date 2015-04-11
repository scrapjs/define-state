# define state [![Build Status](https://travis-ci.org/dfcreative/define-state.svg?branch=master)](https://travis-ci.org/dfcreative/define-state) [![Code Climate](https://codeclimate.com/github/dfcreative/define-state/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/define-state) ![Deps](https://david-dm.org/dfcreative/define-state.svg)

Define stateful property on class instance or any object. Behaves like `defineProperty`, but defines a state.

`$ npm install define-state`

```js
var defineState = require('define-state');

function MyComponent (el) {
	this.el = el;

	//define state on instance
	defineState(this, 'state', this.state);

	//go to initial state
	this.state = true;
}

//state declaration
MyComponent.prototype.state = {
	true: {
		before: function () {
			this.el.innerHTML = 'Hello world!';
		}
	}
}

//create instance
new MyComponent(document.querySelector('#hello'));
```

For state declaration reference see [st8 API](http://npmjs.org/package/st8#API).



[![NPM](https://nodei.co/npm/define-state.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/define-state/)
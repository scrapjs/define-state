/**
 * Define stateful property on an object
 */
module.exports = defineState;

var State = require('st8');


/**
 * Define stateful property on a target
 *
 * @param {object} target Any object
 * @param {string} property Property name
 * @param {object} descriptor State descriptor
 *
 * @return {object} target
 */
function defineState (target, property, descriptor) {
	//define setter/getter on a target
	Object.defineProperty(target, property, {
		set: function (value) {
			return state.set(value);
		},
		get: function () {
			return state.get();
		}
	});

	//define state controller
	var state = new State(descriptor, target);

	return target;
}
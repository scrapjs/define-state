var defineState = require('./');
var assert = require('assert');

describe('Define state', function () {
	it('define getter/setter', function () {
		var a = {
			x: 1
		},
		c = 0;

		defineState(a, 'z', {
			1: {
				before: function () {
					c++;
					assert.equal(this, a);
				},

				after: function () {
					c++;
				}
			},

			_: 1
		});

		assert.equal(a.z, undefined);
		assert.equal(c, 0);

		a.z = 1;
		assert.equal(c, 1);
		assert.equal(a.z, 1);

		a.z = 2;
		assert.equal(c, 3);
		assert.equal(a.z, 1);
	});

	it('define accessor', function () {
		var a = {
			x: 1
		},
		c = 0;

		defineState(a, 'z', {
			1: {
				before: function () {
					c++;
					assert.equal(this, a);
				},

				after: function () {
					c++;
				}
			},

			_: 1
		}, true);

		assert.equal(a.z(), undefined);
		assert.equal(c, 0);

		a.z(1);
		assert.equal(c, 1);
		assert.equal(a.z(), 1);

		a.z(2);
		assert.equal(c, 3);
		assert.equal(a.z(), 1);
	});
});
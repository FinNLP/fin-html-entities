const assert = require('assert');
const fin = require('finnlp');

describe('Before adding extension', function () {
	var p = new fin("a is &gt; b");
	it('number of tokens is wrong', function () {
		assert.equal(p.result[0].tokens.length>4,true);
	});
});

describe('After adding extension', function () {
	fin.extend(require('./index.js'));
	var p = new fin("a is &gt; b");
	it('number of tokens is correct', function () {
		assert.equal(p.result[0].tokens.length,4);
	});
});
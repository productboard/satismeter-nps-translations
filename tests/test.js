var translations = require('..');
var assert = require('chai').assert;

describe('translations', function() {
  it('should include languages', function() {
    assert.isObject(translations.en);
    assert.isObject(translations.cs);
    assert.isObject(translations.id);
  });
  it('should include keys', function() {
    assert.isString(translations.en.HOW_LIKELY);
  });
});

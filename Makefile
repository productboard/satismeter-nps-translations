test:
	node_modules/.bin/mocha tests/test.js

publish: test
	yarn semantic-release

PHONY: test publish

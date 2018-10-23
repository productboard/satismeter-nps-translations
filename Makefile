test:
	node_modules/.bin/mocha tests/test.js

publish: test
	yarn publish --access public

PHONY: test

test:
	npm test

watch-tests:
	git ls-files | entr npm test


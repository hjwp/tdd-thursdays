test:
	npm test

watch-tests:
	git ls-files | entr npm test

commit:
	git add . && git commit -m"another commit" && git push


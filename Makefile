install: install-deps
	npx simple-git-hooks

run:
	bin/brain-games.js

install-deps:
	npm ci

lint:
	npx eslint .
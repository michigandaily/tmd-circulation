.PHONY: dev build build-prod gdoc gsheet

build-prod: export NODE_ENV = production
build-prod: build

install:
	yarn install
	rm -rf dist/

dev:
	yarn run dev

gdoc:
	yarn sink gdoc

gsheet:
	yarn sink gsheet

build:
	rm -rf build/*
	rm -rf dist/*
	yarn run build

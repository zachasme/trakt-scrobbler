
PROFILEDIR = ../../firefox-testprofile

default: help

help:
	@echo "pack           - concatenate content script files"
	@echo "minify         - minify content script files"
	@echo "build-cs       - pack & minify content script files"
	@echo "copy-common    - copy common folder to Chrome and Firefox directories"
	@echo "copy-dep       - copy openpgp.js library to Chrome directory"
	@echo "test-build     - pack content scripts and copy common folder"
	@echo "build          - copy common folder and dependencies"
	@echo "start-ff       - run addon in Firefox beta"
	@echo "start-ff-new   - run addon in Firefox beta, clear local storage"
	@echo "start-ff-std   - run addon in Firefox current release"
	@echo "test-ff        - do test-build & run addon in Firefox"
	@echo "dist-ff        - package add-on as an XPI file in dist folder"
	@echo "dist-cr        - package chrome extension in zip file"

start-ff:
	@echo Start Firefox beta...
	@cfx run --pkgdir=firefox --profiledir=$(PROFILEDIR)

test-ff: test-build start-ff
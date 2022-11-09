# test-transpile

Demo repo to show transpile bug in @html-next/vertical-collection with Ember 4

Console error in Chrome:
```
Uncaught ReferenceError: Ember is not defined
    at DynamicRadar._updateConstants (-private.js:774:1)
    at DynamicRadar._updateConstants (-private.js:1424:1)
    at DynamicRadar.start (-private.js:625:1)
    at component.js:333:1
    at Array.execJob (index.js:27:1)
    at Scheduler.flush (index.js:74:1)
    at index.js:63:1
```

```
ember new test-transpile --yarn
installing app
Ember CLI v4.7.0

✨  Creating a new Ember app in /Users/bryan/Projects/test-transpile:
  create .editorconfig
  create .ember-cli
  create .eslintignore
  create .eslintrc.js
  create .github/workflows/ci.yml
  create .prettierignore
  create .prettierrc.js
  create .template-lintrc.js
  create .watchmanconfig
  create README.md
  create app/app.js
  create app/components/.gitkeep
  create app/controllers/.gitkeep
  create app/helpers/.gitkeep
  create app/index.html
  create app/models/.gitkeep
  create app/router.js
  create app/routes/.gitkeep
  create app/styles/app.css
  create app/templates/application.hbs
  create config/ember-cli-update.json
  create config/environment.js
  create config/optional-features.json
  create config/targets.js
  create ember-cli-build.js
  create .gitignore
  create package.json
  create public/robots.txt
  create testem.js
  create tests/helpers/index.js
  create tests/index.html
  create tests/integration/.gitkeep
  create tests/test-helper.js
  create tests/unit/.gitkeep
  create vendor/.gitkeep

🚧  Installing packages... This might take a couple of minutes.
yarn: Installed dependencies

🎥  Initializing git repository.
Git: successfully initialized.

🎉  Successfully created project test-transpile.
👉   Get started by typing:

  $ cd test-transpile
  $ yarn start

Happy coding!
Bryans-MacBook-Pro:Projects bryan$ cd test-transpile
Bryans-MacBook-Pro:test-transpile bryan$ ember install @html-next/vertical-collection

🚧  Installing packages... This might take a couple of minutes.
yarn: Installed @html-next/vertical-collection
Install failed. Could not find addon with name: @html-next/vertical-collection

Bryans-MacBook-Pro:test-transpile bryan$ ember install @html-next/vertical-collection

🚧  Installing packages... This might take a couple of minutes.
yarn: Installed @html-next/vertical-collection
Installed addon package.
Bryans-MacBook-Pro:test-transpile bryan$ ember g controller application
installing controller
  create app/controllers/application.js
installing controller-test
  create tests/unit/controllers/application-test.js
Bryans-MacBook-Pro:test-transpile bryan$ ember --version
ember-cli: 4.7.0
node: 14.20.0
os: darwin x64
Bryans-MacBook-Pro:test-transpile bryan$ ember-cli-update
? Blueprint updates have been found. Which one would you like to update? app, cu
rrent: 4.7.0, latest: 4.8.0
? Do you want the latest version? 4.8.0 (latest)
installing app
Ember CLI v4.7.0

Creating a new Ember app in /private/var/folders/24/9c9x7j316gbd3z5wg84fghqc0000gn/T/tmp-27102-IPZF3K7NnsDc/test-transpile:
  create .editorconfig
  create .ember-cli
  create .eslintignore
  create .eslintrc.js
  create .github/workflows/ci.yml
  create .prettierignore
  create .prettierrc.js
  create .template-lintrc.js
  create .watchmanconfig
  create README.md
  create app/app.js
  create app/components/.gitkeep
  create app/controllers/.gitkeep
  create app/helpers/.gitkeep
  create app/index.html
  create app/models/.gitkeep
  create app/router.js
  create app/routes/.gitkeep
  create app/styles/app.css
  create app/templates/application.hbs
  create config/ember-cli-update.json
  create config/environment.js
  create config/optional-features.json
  create config/targets.js
  create ember-cli-build.js
  create .gitignore
  create package.json
  create public/robots.txt
  create testem.js
  create tests/helpers/index.js
  create tests/index.html
  create tests/integration/.gitkeep
  create tests/test-helper.js
  create tests/unit/.gitkeep
  create vendor/.gitkeep

Successfully created project test-transpile.
Get started by typing:

  $ cd test-transpile
  $ yarn start

Happy coding!
installing app
Ember CLI v4.8.0

Creating a new Ember app in /private/var/folders/24/9c9x7j316gbd3z5wg84fghqc0000gn/T/tmp-27102-1dpaAmgm6H7v/test-transpile:
  create .editorconfig
  create .ember-cli
  create .eslintignore
  create .eslintrc.js
  create .github/workflows/ci.yml
  create .prettierignore
  create .prettierrc.js
  create .template-lintrc.js
  create .watchmanconfig
  create README.md
  create app/app.js
  create app/components/.gitkeep
  create app/controllers/.gitkeep
  create app/helpers/.gitkeep
  create app/index.html
  create app/models/.gitkeep
  create app/router.js
  create app/routes/.gitkeep
  create app/styles/app.css
  create app/templates/application.hbs
  create config/ember-cli-update.json
  create config/environment.js
  create config/optional-features.json
  create config/targets.js
  create ember-cli-build.js
  create .gitignore
  create package.json
  create public/robots.txt
  create testem.js
  create tests/helpers/index.js
  create tests/index.html
  create tests/integration/.gitkeep
  create tests/test-helper.js
  create tests/unit/.gitkeep
  create vendor/.gitkeep

Successfully created project test-transpile.
Get started by typing:

  $ cd test-transpile
  $ yarn start

Happy coding!
Bryans-MacBook-Pro:test-transpile bryan$ ember --version
ember-cli: 4.8.0
node: 14.20.0
os: darwin x64

```
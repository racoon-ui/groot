---
category: packages
---

## ui-scripts

A CLI tool for UI component libraries made by ST Unitas Inc.

### Installation

```sh
yarn add @racoon-ui/ui-scripts
```

### Scripts

#### `build`

To build (babel transpile) a package to be consumed as a library:

`yarn ui-build`

To build (webpack) a package to be consumed as an application:

`yarn ui-build --bundle`

#### `clean`

To clean out built/generated files from a package:

`yarn ui-build --clean`

#### `modules`

`yarn ui-build --modules lib` writes commonjs modules to the lib/ directory.

`yarn ui-build --modules es` writes es modules to the es/ directory.

If not specified, `modules` defaults to `es,lib`.

#### `test`

To run (karma/mocha) tests for a package:

`yarn ui-test`

#### `lint`

To lint (eslint/stylelint) a package:

`yarn ui-test --lint`

To lint a commit message (the `HEAD` commit):

`yarn ui-scripts --lint-commit`

#### `commit`

To write a correctly formatted commit message and commit the staged changes:

`yarn ui-scripts --commit`

#### `install-react`

To install a specific version of React and ReactDOM without updating `package.json`
(defaults to the versions specified in the resolutions field):

`yarn ui-scripts --install-react [version]`

#### `bump`

To update all package versions
(defaults to determining the version automatically using commit messages):

`yarn ui-scripts --bump [version|major|minor|patch]`

#### `publish`

To publish all packages (defaults to current version):

`yarn ui-scripts --publish [version]`

#### `fix-publish`

If the publish command fails, you can run the `fix-publish` script to publish
a version if it hasn't been published already. This script will try to determine
(using `npm info`) if the version is already published before publishing.

`yarn ui-scripts --fix-publish [version]`

#### `post-publish`

To run post-publish steps
(create Git tag, create Jira version, Slack notification)
of the release script:

`yarn ui-scripts --post-publish`

#### `deploy-docs`

To run the deploy of the documentation (to Github pages):

`yarn ui-scripts --deploy-docs`

#### `examples`

To build component examples and start up a dev server with hot reloading:

`yarn ui-build --examples --watch -p 8080`

To build component examples for deploying:

`yarn ui-build --examples`

#### `server`

To start up a server to test production builds of examples or docs:

`yarn ui-scripts --server -p 8080`

#### `tag`

To add an NPM dist-tag for all packages:

`yarn ui-scripts --tag add 5.11.0 latest`

To remove an NPM dist-tag for all packages:

`yarn ui-scripts --tag rm 5.11.0 latest`

#### `deprecate`

To deprecate all packages (optional arguments: version, fix version):

`yarn ui-scripts --deprecate 5.11.0 5.11.1`

### Configuration

If you'd like to use the publish, deploy, and release scripts, you'll need to configure your project as follows:

#### Environment variables

Add a `.env` file to your project root:

```sh
NPM_TOKEN=
NPM_USERNAME=
NPM_EMAIL=
GIT_EMAIL=""
GIT_USERNAME=
GIT_REMOTE_URL=gerrit:stunitas-ui
GIT_REMOTE_NAME=origin
JIRA_CONSUMER_KEY=
JIRA_TOKEN=
JIRA_SECRET=
JIRA_PEM_PATH=/Users/your_user_name/.ssh/jira.pem
SLACK_USERNAME=instui
SLACK_WEBHOOK=
```


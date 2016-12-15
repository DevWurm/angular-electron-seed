# Angular 2 - Electron seed
A biolerplate for building cross platform desktop apps with [Electron](http://electron.atom.io/), [Angular 2](https://angular.io/) and the [Angular-CLI](https://github.com/angular/angular-cli).

This project is based on Angular-CLI version 1.0.0-beta.19-3.

## What you get
* Electron
* Angular 2.1
* Angular-CLI 1.0.0-beta.19-3
* Bundling and transpiling with Webpack (Typescript, SASS, LESS, Stylus, etc.)
* Development server with LiveReload
* Karma, Jasmine and Protractor for testing
* Code scaffolding via Angular-CLI
* Application packaging via [electron-packager](https://github.com/electron-userland/electron-packager)

## Getting started
Use the seed via git:
```sh
git clone https://github.com/DevWurm/angular-2-electron-seed.git my-project
```
After this change into `my-project` and run
```sh
npm install
```

## Available tools
### Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build:prod` flag for a production build.

### Running the app
To run the app based on the created build results, run `npm run run`

### Development server
Run `npm run start` for a dev server. The app will automatically launch and reload if you change any of the source files.

###  Code scaffolding
If you have the Angular-CLI installed globally you can run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/interface/enum/module`.

### Running unit tests
Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app in a dev server via `npm run start`.

### Packaging releases
Run `npm run package:win`, `npm run package:mac`, `npm run package:linux` or `npm run package:all` to build binary releases for the specified plattform(s).

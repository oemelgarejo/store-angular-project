# MyngStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Slides
npm i swiper

# Files
For download and upload files by http, npm i file-saver @types/file-saver --save-dev

# Modules
ng g m cms --routing
ng g c cms/pages/tasks
ng g c cms/pages/grid
ng g c cms/components/layout

# Quicklink strategy
npm i ngx-quicklink --save

# Netlify config for CI

netlify.toml

[build]
  publish = "dist/angular-modules"
  command = "npm run build"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

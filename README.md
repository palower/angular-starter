# AngularKit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.
This project uses NG-Bootstrap, a combination of Bootstrap 4 and Angular with prebuilt components and scripting (https://ng-bootstrap.github.io/#/home)

# TO-DOs
--> Finish form ++ buttons
==> build as component library
    -- forms/inputs
    -- UI elements, ?, Resources
--> check active state in navigation is getting set
--> add components from Oltiva Akumina example
--> set up variables in scss for branding colors and fonts

# Common tasks
Generate a new component: ng g c "component-name" --module=app
--> add routing to app-routing.module.ts
--> remove component reference to local scss
--> add scss to stylesheet dir and import to styles.scss 

# Component build structure
Container class > row > cols
-- No bootstrap layouts used in page level, only in components
-- allows for full-width (.container-fluid) and set-max-width (.container) components
Content: stub in all content with objects in the .ts files

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

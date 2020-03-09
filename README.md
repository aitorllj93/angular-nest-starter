# Angular Nest Starter

<p align="center">
  <img src="https://raw.githubusercontent.com/d3v0ps/angular-nest-starter/master/apps/app/src/assets/shield.png" width="200">
</p>

Angular + NestJS Starter Kit

Includes the following packages:

| Package                 | Version |
|-------------------------|---------|
| Angular                 | 9.0.0   |
| NestJS                  | 6.8.3   |
| rxjs                    | 6.5.0   |
| @storybook/angular      | 5.3.14  |
| @angular/cdk            | 9.1.1   |
| @angular/flex-layout    | 9.0.0   |
| @angular-mdc/web        | 5.1.1   |
| @swimlane/ngx-datatable | 16.0.3  |
| @ng-select/ng-select    | 3.7.3   |

## Development server

### storybook
Run `npm run storybook` for a storybook server. Navigate to http://localhost:6006/. The storybook will automatically reload if you change any of the story files.

### app
Run `ng serve app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### api
Run `ng serve api` for a dev server. Navigate to http://localhost:3333/api. The api will automatically reload if you change any of the source files.

## Build

### storybook
Run `npm run build-storybook` to build the storybook. The build artifacts will be stored in the `storybook-static/` directory.

### app
Run `ng build app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### api
Run `ng build api` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

# Angular Nest Starter

[![demo](https://img.shields.io/badge/-demo-ff69b4)](https://d3v0ps.github.io/angular-nest-starter)

<p align="center">
  <img src="https://raw.githubusercontent.com/d3v0ps/angular-nest-starter/master/apps/app/src/assets/shield.png" width="200">
</p>

Angular + NestJS Starter Kit

Includes the following packages:

| Package                 | Version |
|-------------------------|---------|
| [Angular](https://angular.io/)                 | 9.1.11   |
| [NestJS](https://nestjs.com/)                  | 7.2.0   |
| [rxjs](https://rxjs.dev/)                    | 6.5.5   |
| [@ngxs/store]()                                   | 3.6.2   |
| [xstate]()                                   | 4.10.0   |
| [@storybook/angular](https://storybook.js.org/)      | 5.3.19  |
| [@angular/cdk](https://material.angular.io/cdk/categories)            | 9.2.4   |
| [@angular/flex-layout](https://github.com/angular/flex-layout)    | 9.0.0   |
| [@angular-mdc/web](https://trimox.github.io/angular-mdc-web)      | 5.1.1   |
| [@swimlane/ngx-datatable](https://swimlane.gitbook.io/ngx-datatable/) | 17.0.0  |
| [@swimlane/ngx-charts](https://swimlane.gitbook.io/ngx-charts/) | 14.0.0  |
| [@ng-select/ng-select](https://ng-select.github.io/)    | 4.0.1   |
| [ngx-swiper-wrapper](https://github.com/zefoy/ngx-swiper-wrapper)    | 9.0.1   |


## Features

### UI Module + Storybook

Includes `angular-mdc`, `ngx-datatable`, `ng-select`, `ngx-charts`...

[Storybook Demo](https://d3v0ps.github.io/angular-nest-starter/)

<p align="center">
  <img src="https://raw.githubusercontent.com/d3v0ps/angular-nest-starter/master/apps/app/src/assets/storybook.png" width="600">
</p>

### Feature Modules + NGXS

Includes example feature modules integrated with `ngxs`

See them at [Storybook Demo](https://d3v0ps.github.io/angular-nest-starter/) 

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

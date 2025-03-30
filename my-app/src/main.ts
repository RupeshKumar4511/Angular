import { bootstrapApplication } from '@angular/platform-browser';
// bootstrapApplication is a function that bootstraps an Angular application without using @NgModule.

// @angular/platform-browser is a core Angular package that provides browser-specific services and APIs required to run an Angular application in a web browser.

import { appConfig } from './app/app.config';
// appConfig is a configuration object (defined in app.config.ts).
import { AppComponent } from './app/app.component';
// AppComponent is the root component of the Angular application.

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication() initializes the Angular application.
// Arguments:
// AppComponent → The root component.
// appConfig → Configuration settings for the app (e.g., routing, providers, global services).
// Error Handling: If bootstrapping fails, catch() logs the error.
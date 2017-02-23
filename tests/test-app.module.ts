import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TestAppComponent }  from './test-app.component';
import { NgHrefFragmentDirective } from '../src/ng-href-fragment.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TestAppComponent,
    NgHrefFragmentDirective
  ],
  bootstrap: [
    TestAppComponent
  ]
})
export class TestAppModule { }

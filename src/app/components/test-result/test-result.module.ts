import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestResultRoutingModule } from './test-result-routing.module';
import { TestResultComponent } from './test-result.component';


@NgModule({
  declarations: [
    TestResultComponent
  ],
  imports: [
    CommonModule,
    TestResultRoutingModule
  ]
})
export class TestResultModule { }

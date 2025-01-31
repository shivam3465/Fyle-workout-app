import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './component/main.component';
import { MainRouting } from './main.routing';
import { MainHeaderComponent } from './component/main.header.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [MainComponent, MainHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent],
})
export class MainModule {}

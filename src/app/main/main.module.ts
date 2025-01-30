import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './component/main.component';
import { MainRouting } from './main.routing';
import { MainHeaderComponent } from './component/main.header.component';

@NgModule({
  declarations: [MainComponent, MainHeaderComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MainRouting],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent],
})
export class MainModule {}

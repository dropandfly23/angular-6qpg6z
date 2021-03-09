import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      SchedulerModule,
      DropDownsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

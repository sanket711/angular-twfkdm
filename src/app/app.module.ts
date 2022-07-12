import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    GridModule,
    PDFExportModule,
    ButtonsModule
  ],
  declarations: [ AppComponent, InvoiceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


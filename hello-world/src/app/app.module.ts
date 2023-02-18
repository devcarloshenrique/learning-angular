import { ComponenteTesteComponent } from './componente-teste/componente-teste.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablePriceComponent } from './table-price/table-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTesteComponent,
    TablePriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

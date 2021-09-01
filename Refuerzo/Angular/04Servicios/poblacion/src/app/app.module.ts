import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPaisesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

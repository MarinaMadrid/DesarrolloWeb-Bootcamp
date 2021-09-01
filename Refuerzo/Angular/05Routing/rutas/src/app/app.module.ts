import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundariaComponent } from './components/secundaria/secundaria.component';
import { Child1Component } from './components/secundaria/children/child1/child1.component';
import { Child2Component } from './components/secundaria/children/child2/child2.component';
import { Child3Component } from './components/secundaria/children/child3/child3.component';
import { TerceraComponent } from './components/tercera/tercera.component';
import { Child4Component } from './components/tercera/children/child4/child4.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'secundaria', component: SecundariaComponent,
  children: [
    { path: '', redirectTo: 'secundaria', pathMatch: 'full' },
    { path: 'child1', component: Child1Component },
    { path: 'child2', component: Child2Component },
    { path: 'child3', component: Child3Component }
  ]},
  { path: 'tercera/:param', component: TerceraComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    TerceraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- Solo para hacer debugging
      ),
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

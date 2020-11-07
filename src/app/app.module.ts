import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgParticlesModule} from 'ng-particles';
import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [BrowserModule, NgParticlesModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

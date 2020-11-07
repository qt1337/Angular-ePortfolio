import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [BrowserModule, NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

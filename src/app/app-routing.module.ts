import {NgModule} from '@angular/core';
import {PageComponent} from './page/page.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'page/:topic', component: PageComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

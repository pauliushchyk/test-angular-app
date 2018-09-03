import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { MoviesModule } from './modules/movies/movies.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, TitleComponent],
  imports: [BrowserModule, MoviesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

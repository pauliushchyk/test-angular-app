import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './containers/movie/movie.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TitleComponent } from './components/title/title.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MoviesService } from './services/movies/movies.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoaderComponent,
    MovieCardComponent,
    MovieComponent,
    MoviesComponent,
    SearchFormComponent,
    TitleComponent,
  ],
  providers: [MoviesService],
})
export class MoviesModule {}

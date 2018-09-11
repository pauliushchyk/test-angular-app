import { Component, Input } from '@angular/core';

import { Movie } from './../../../../entities/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  private _movie: Movie;

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
  }

  get movie(): Movie {
    return this._movie;
  }
}

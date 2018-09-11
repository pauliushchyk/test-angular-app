import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../../../../entities';
import { movies } from '../../../../shared/data/movie.mock-data';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private _movies: Map<number, Movie> = new Map<number, Movie>();

  constructor() {
    this._movies.clear();

    if (movies) {
      this._movies = movies.reduce(
        (collection: Map<number, Movie>, movie: Movie) =>
          collection.set(movie.id, movie),
        new Map<number, Movie>(),
      );
    }
  }

  getMovie(id: number) {
    return of(this._movies.get(id));
  }

  getMovies(query?: string) {
    return of(this._movies).pipe(
      map((list: Map<number, Movie>) =>
        Array.from(list.values()).filter(
          (movie: Movie) =>
            !query ||
            (query && movie.name.toLowerCase().includes(query.toLowerCase())),
        ),
      ),
    );
  }
}

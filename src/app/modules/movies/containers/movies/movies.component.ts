import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../../../entities';
import { MoviesService } from '../../services/movies/movies.service';
import { listAnimation } from '../../../../shared/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [listAnimation],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this._moviesService.getMovies();
  }

  onSearch({ query }): void {
    this.movies$ = this._moviesService.getMovies(query);
  }
}

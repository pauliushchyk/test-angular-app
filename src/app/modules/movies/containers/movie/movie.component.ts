import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from '../../../../entities';
import { MoviesService } from '../../services/movies/movies.service';
import { elementAnimation } from '../../../../shared/animations';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [elementAnimation],
})
export class MovieComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.movie$ = this._moviesService.getMovie(+params.id);
    });
  }
}

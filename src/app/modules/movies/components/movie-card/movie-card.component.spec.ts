import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieCardComponent } from './movie-card.component';
import { genreType } from '../../../../entities/genre-type';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = {
      id: 1,
      key: 'deadpool',
      name: 'Deadpool',
      description: 'Deadpool.',
      genres: [genreType.action, genreType.adventure, genreType.comedy],
      rate: 8.6,
      length: '1hr 48mins',
      img: 'deadpool.jpg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

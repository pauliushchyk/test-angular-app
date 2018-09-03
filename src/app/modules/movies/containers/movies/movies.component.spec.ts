import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MoviesComponent } from './movies.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { TitleComponent } from '../../../../components/title/title.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoaderComponent,
        MovieCardComponent,
        MoviesComponent,
        SearchFormComponent,
        TitleComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

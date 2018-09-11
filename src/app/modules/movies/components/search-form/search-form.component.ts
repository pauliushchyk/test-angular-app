import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchForm: FormGroup = new FormGroup({
    query: new FormControl(''),
  });

  @Output()
  search = new EventEmitter<string>();

  onSubmit(event) {
    event.preventDefault();

    this.search.emit(this.searchForm.value);
  }
}

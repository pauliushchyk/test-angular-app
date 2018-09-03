import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  private _text: string;

  @Input()
  set text(text: string) {
    this._text = text;
  }

  get text(): string {
    return this._text;
  }
}

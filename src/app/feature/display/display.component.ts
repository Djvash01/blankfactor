import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRepository } from 'src/app/core/services';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent implements OnInit {
  public data$!: Observable<Array<string>>;
  constructor(private readonly apiService: ApiRepository) {}

  public ngOnInit(): void {
    this.data$ = this.apiService.getData<Array<string>>('url');
  }
}

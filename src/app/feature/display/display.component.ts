import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ApiRepository } from 'src/app/core/services';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent implements OnInit {
  constructor(private readonly apiService: ApiRepository) {}
}

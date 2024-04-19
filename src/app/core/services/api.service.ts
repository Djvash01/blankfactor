import { Injectable } from '@angular/core';
import { ApiRepository } from './api.repository';
import { of, Observable } from 'rxjs';

@Injectable()
export class ApiService implements ApiRepository {
  constructor() {}

  public getData<T>(url: string): Observable<T> {
    const data = ['hello', 'World'];
    return of(data as T);
  }
}

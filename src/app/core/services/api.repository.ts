import { Observable } from 'rxjs';

export abstract class ApiRepository {
  public abstract getData<T>(url: string): Observable<T>;
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SimpleStreamService {

  private _streamSubject = new Subject<any>();

  public observableStream = this._streamSubject.asObservable();

  constructor() { }

  public publishIntoStream(message: any) {
    this._streamSubject.next(message);
  }

}

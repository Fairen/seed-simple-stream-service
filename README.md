# @fairen/seed-simple-stream-service

A basic and generic Angular Service

## Usage

> Update the code of the seed to match your needs

For Exemple if you want to build an info stream service : 

```Typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InfoService {

  private _infoSubject = new Subject<string>();

  public infoStream = this._infoSubject.asObservable();

  constructor() { }

  public dispatchInfo(info: string) {
    this._infoSubject.next(info)
  }

}

```

And then use it across your application : 

```Typescript
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { InfoService } from 'app/shared/services/utils/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public snackBar: MatSnackBar,
              private infoService: InfoService) {

    this.infoService.infoStream.subscribe(
      info => {
        this.snackBar.open(info, 'OK');
      }
    );

  }

}
...

this.someDataService.delete(data)
  .subscribe(
    result => {
      this.infoService.dispatchInfo(result.successMessage);
      ...
    },
    err => {
      ...
    }
  );

```


## Test 
```sh
npm run ci:test
```

## Lint 
```sh
npm run ci:lint
```
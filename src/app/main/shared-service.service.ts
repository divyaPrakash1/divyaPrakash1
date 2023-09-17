import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  print(msg: string, id: string) {
    let el = document.createElement('li');
    el.innerText = msg;
    document.getElementById(id)?.appendChild(el);
  }
}

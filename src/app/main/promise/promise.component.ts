import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseValue: string = '';
  ngOnInit(): void {
    this.getLaptop();
  }

  isDellAvailable(): boolean {
    return false
  }
  isHpAvailable(): boolean {
    return false
  }

  getLaptop() {
    let byLaptop = new Promise((resolve, reject) => {
      
      if(this.isHpAvailable()) {
        setTimeout(() => {
          resolve('Hp is available');
        }, 1000);
      } else if(this.isDellAvailable()) {
        setTimeout(() => {
          resolve('Dell is available');
        }, 1000);
      } else {
        reject('Laptop is not available');
      }
    })

    byLaptop.then((resp: any) => {
      console.log('Success', resp);
      this.promiseValue = resp;
    }).catch(resp => {
      this.promiseValue = resp;
      console.log('Success', resp);
    })
  }

   

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rxjs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isActive: boolean  = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isActive = this.router.url.includes('promise') ?? false;
  }

  goTo() {
    console.log('aaaaaaaaaaaaaaaaaaaaa');
    if(this.isActive) {
      this.router.navigate(['./promise'])
    } else {
      this.router.navigate(['./observable'])
    }
  }


}

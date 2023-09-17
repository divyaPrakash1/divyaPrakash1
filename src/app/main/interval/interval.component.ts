import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'rxjs-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})

/// interval is use when a observable needed in a certain time interval

/// timer is same as interval but the difference is it is taking first argument ki kitne time k baad ye start ho
// and second argument is ki iss time interval pr repeat hota rhe
export class IntervalComponent implements OnInit {
  videoSubscription!: Subscription;
  videoMsg: string = '';
  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    // const broadCardVideo = interval(1000);
    // const broadCardVideo = timer(delay, timer);
    const broadCardVideo = timer(5000, 1000);
    this.videoSubscription = broadCardVideo.subscribe((res) => {
      this.videoMsg = 'Video ' + res;
      console.log(res);
      this._sharedService.print(this.videoMsg, 'elContainer');
      this._sharedService.print(this.videoMsg, 'elContainer2');
      this._sharedService.print(this.videoMsg, 'elContainer3');
      if (res === 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}

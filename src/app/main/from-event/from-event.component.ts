import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'rxjs-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})

/// from event is used when wnat to create observale after clicking on the html element
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((resp) => {
      // console.log('Video ' + ++count);
      count++;
      let msg = `Video ${count}`;
      this._sharedService.print(msg, 'elContainer');
      this._sharedService.print(msg, 'elContainer2');
    });
  }
}

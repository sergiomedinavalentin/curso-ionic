import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the RangeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'range',
  templateUrl: 'range.html'
})
export class RangeComponent {

  brightness: number = 0;

  @Input() set rangeValues(value: any) {
    if (value) {
      this.setValue(value);
    }
  };
  @Output() brightnessEmiter: EventEmitter<any> = new EventEmitter<any>();

  min: number = 0;
  max: number = 50;

  constructor() {
  }

  ngAfterViewInit() {
    this.brightnessEmiter.emit(this.brightness);
  }

  change() {
    this.brightnessEmiter.emit(this.brightness);
  }

  setValue(value) {
    this.min = value.min;
    this.max = value.max;

    if (this.min > this.brightness) {
      this.brightness = this.min;
    }

    this.brightnessEmiter.emit(this.brightness);
  }

}

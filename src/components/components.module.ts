import { NgModule } from '@angular/core';
import { RangeComponent } from './range/range';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [RangeComponent],
	imports: [IonicModule],
	exports: [RangeComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemInfoPage } from './item-info';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ItemInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemInfoPage),
    TranslateModule.forChild(),
  ],
})
export class ItemInfoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from './../../pipes/pipes.module';
import { HomePage } from './home';
import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    PipesModule
  ]
})
export class HomePageModule {}

import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, InfiniteScroll } from 'ionic-angular';
import { BackendProvider } from './../../providers/backend/backend';
import { ITEM_INFO } from './../pages.constants';

export interface MarvelData {
  id: string,
  name: string,
  avatar: string,
  description: string,
  series: any,
  comics: any
}

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  items: Array<MarvelData> = [];
  offset: number = 0;
  limit: number = 20;
  responseLength: number;

  constructor(
    private backendProvider: BackendProvider,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
  }

  async ionViewWillEnter() {
    try {
      await this.getData();
      
    } catch (err) {
      let toast = this.toastCtrl.create({
        message: `Error: ${err}`,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'bottom',
        dismissOnPageChange: true
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }

  goToDetail(item: MarvelData) {
    this.navCtrl.push(ITEM_INFO, { item });
  }

  async doInfinite(infiniteScroll: InfiniteScroll) {
    this.offset += this.limit;

    try {
      await this.getData();

      if (this.responseLength === 0) {
        infiniteScroll.enable(false);
      }

      infiniteScroll.complete();
    } catch (err) {
      let toast = this.toastCtrl.create({
        message: `Error: ${err}`,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'bottom',
        dismissOnPageChange: true
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }

  async getData() {
    const response = await this.backendProvider.getResources(`characters`, {
      apikey: 'xxx',
      hash: 'xxx',
      ts: 1512426655586,
      offset: this.offset,
      limit: this.limit
    });

    this.responseLength = response.data.results.length;

    for (let i = 0; i < response.data.results.length; i++) {
      this.items.push({
        id: response.data.results[i].id,
        name: response.data.results[i].name,
        avatar: `${response.data.results[i].thumbnail.path}.${response.data.results[i].thumbnail.extension}`,
        description: response.data.results[i].description,
        series: response.data.results[i].series,
        comics: response.data.results[i].comics
      });
    }
  }
}

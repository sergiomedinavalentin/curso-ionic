import { Component } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [
    {
      title: 'Tarjeta 1',
      body: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      expand: false
    },
    {
      title: 'Tarjeta 2',
      body: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      expand: false
    }
  ];
  range: any = {
    max: 150,
    min: 0
  };
  brightness: number;
  image: string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private platform: Platform) {
  }

  add() {
    this.items.push({
      title: `Tarjeta ${this.items.length + 1}`,
      body: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      expand: false
    });
  }

  remove() {
    this.items.pop();
  }

  expand(index) {
    this.items[index].expand = !this.items[index].expand;
  }

  changeBrightness(value) {
    this.brightness = value;
  }

  changeRange() {
    this.range = {
      max: this.range.max + 100,
      min: this.range.min + 100
    }
  }

  getPictureFromCamera() {
    if (!this.platform.is('cordova')) {
      return;
    }

    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 400,
      targetHeight: 400,
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      cameraDirection: this.camera.Direction.FRONT
    };

    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getPictureFromGallery() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 400,
      targetHeight: 400,
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true
    };

    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });
  }

}

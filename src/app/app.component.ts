import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HOME_PAGE, LIST_PAGE } from '../pages/pages.constants';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HOME_PAGE;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private translateService: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translateService.setDefaultLang('es');

      this.changeLanguage('es');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  changeLanguage(language: string) {
    this.translateService.use(language);

    this.translateService.get('PAGES').subscribe(
      value => {
        this.pages = [
          { title: value.HOME, component: HOME_PAGE },
          { title: value.LIST, component: LIST_PAGE }
        ];
      }
    );
  }
}

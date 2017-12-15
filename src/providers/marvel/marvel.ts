import { Injectable } from '@angular/core';
import { BackendProvider } from './../backend/backend';
import { LocalConfig } from './../../local.config';

/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {

  constructor(
    private backendProvider: BackendProvider,
    private localConfig: LocalConfig
  ) {
  }

  getCharacters(params: any): Promise<any> {
    return this.backendProvider.getResources('characters', {
      apikey: this.localConfig.apiKey,
      hash: '0db20119a17c9d2974d3abe18aa18a23',
      ts: 1512426655586,
      offset: params.offset,
      limit: params.limit
    });
  }

}

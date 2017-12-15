import * as localConfigOverride from './local.config.override';
import { Injectable } from '@angular/core';

/**
 * Use this file as a template of available config properties
 *
 * Do not put here your local configuration!!!
 * only the default config values
 */

@Injectable()
export class LocalConfig {

  serverBaseUrl: string = 'xxx';

  apiBasePath: string = '/v1/public/';

  get apiBaseUrl(): string { return this.serverBaseUrl + this.apiBasePath; };

  apiKey: string = 'xxx';

  // ----------------------------------------------------------------------
  // do not change environment here! use local.config.override.ts
  environment: string; // dev / pre / prod

  constructor() {
    this.environment = localConfigOverride.environment;
    Object.assign(this, localConfigOverride[this.environment]);
  }
}

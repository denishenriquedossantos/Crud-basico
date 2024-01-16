import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {ProdutoServiceService} from "./produto-service.service";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), ProdutoServiceService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { KittyGateway } from '@core/ports/kitty.gateway';
import { KittyStatus } from '@app/views/cagnotte/models/kitty.model';
import { FakeKittyGateway } from '@core/adapters/fake-kitty-gateway';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
    ),
    {
      provide: KittyGateway,
      useFactory: () => {
        const gateway = new FakeKittyGateway();
        gateway.kittyById = {
          '1': {
            id: '1',
            name: 'Kitty 1',
            description: 'Description 1',
            goal: 100,
            currentAmount: 50,
            status: KittyStatus.PENDING,
            createdAt: new Date(),
            updatedAt: new Date(),
            owner: 'Georges DEFO',
          },
          '2': {
            id: '2',
            name: 'Kitty 2',
            description: 'Description 2',
            goal: 200,
            currentAmount: 150,
            status: KittyStatus.OPEN,
            createdAt: new Date(),
            updatedAt: new Date(),
            owner: 'Ayan DEFO',
          },
        };
        return gateway;
      },
    },
  ],
};

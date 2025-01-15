import { KittyGateway } from '@core/ports/kitty.gateway';
import {
  CreateKitty,
  Kitty,
  KittyStatus,
} from '@app/views/cagnotte/models/kitty.model';
import { Observable, of } from 'rxjs';

export class FakeKittyGateway extends KittyGateway {
  kittyById: Record<string, Kitty> = {};
  createdKitty: Kitty = {} as Kitty;

  retrieveAll(): Observable<Kitty[]> {
    return of(Object.values(this.kittyById));
  }

  createKitty(createKitty: CreateKitty): Observable<Kitty> {
    this.createdKitty = {
      ...createKitty,
      id: Math.random().toString(),
      createdAt: new Date(),
      currentAmount: 0,
      status: KittyStatus.OPEN,
      updatedAt: new Date(),
    };
    this.kittyById[this.createdKitty.id] = this.createdKitty;
    return of(this.createdKitty);
  }
}

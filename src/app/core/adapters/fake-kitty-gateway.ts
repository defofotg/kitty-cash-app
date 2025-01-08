import {KittyGateway} from "@core/ports/kitty.gateway";
import {CreateKitty, Kitty} from "@app/views/cagnotte/models/kitty.model";
import {Observable, of} from "rxjs";

export class FakeKittyGateway extends KittyGateway {
  kittyById: Record<string, Kitty> = {};
  createdKitty: Kitty = {} as Kitty;

  withCreatedKitty(kitty: Kitty): FakeKittyGateway {
    this.createdKitty = kitty;
    return this;
  }

  retrieveAll(): Observable<Kitty[]> {
    return of(Object.values(this.kittyById));
  }

  createKitty(createKitty: CreateKitty): Observable<Kitty> {
    return of(this.createdKitty);
  }
}

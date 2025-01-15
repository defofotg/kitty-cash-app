import {KittyGateway} from "@core/ports/kitty.gateway";
import {CreateKitty, Kitty, KittyStatus} from "@app/views/cagnotte/models/kitty.model";
import {Observable, of} from "rxjs";

export class InMemoryKittyGateway extends KittyGateway {
  private kitties: Kitty[] = [];

  withKitties(kitties: Kitty[]): InMemoryKittyGateway {
    this.kitties = kitties;
    return this;
  }

  retrieveAll(): Observable<Kitty[]> {
    return of(this.kitties);
  }

  createKitty(createKitty: CreateKitty): Observable<Kitty> {
    const kitty = { ...createKitty, status: KittyStatus.PENDING, currentAmount: 0, id: Math.random().toString(), createdAt: new Date(), updatedAt: new Date() };
    this.kitties = [...this.kitties, kitty];
    return of(kitty);
  }
}

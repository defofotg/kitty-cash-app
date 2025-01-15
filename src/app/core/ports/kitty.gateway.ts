import {Observable} from "rxjs";
import {CreateKitty, Kitty} from "@app/views/cagnotte/models/kitty.model";

export abstract class KittyGateway {
  abstract retrieveAll(): Observable<Kitty[]>
  abstract createKitty(createKitty: CreateKitty): Observable<Kitty>
}

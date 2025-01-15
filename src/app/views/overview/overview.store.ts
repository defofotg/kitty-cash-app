import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  CreateKitty,
  Kitty,
  KittyStatus,
} from '@views/cagnotte/models/kitty.model';
import { computed, inject, InjectionToken } from '@angular/core';
import { KittyGateway } from '@core/ports/kitty.gateway';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

export type OverviewState = {
  kitties: Kitty[];
};

export const OverviewStateToken = new InjectionToken<OverviewState>(
  'OverviewStateToken',
  {
    factory: () => ({ kitties: [] }),
  },
);

export const OverviewStore = signalStore(
  withState<OverviewState>(() => inject(OverviewStateToken)),
  withComputed((store) => ({
    openKitties: computed(() => {
      return store
        .kitties()
        .filter((kitty) => kitty.status === KittyStatus.OPEN);
    }),
    inactiveKitties: computed(() =>
      store.kitties().filter((kitty) => kitty.status !== KittyStatus.OPEN),
    ),
    closedKitties: computed(() =>
      store.kitties().filter((kitty) => kitty.status === KittyStatus.CLOSED),
    ),
  })),
  withMethods((store, kittyGateway = inject(KittyGateway)) => ({
    getKitties: rxMethod<void>(
      pipe(
        switchMap(() => kittyGateway.retrieveAll()),
        tap((kitties) => patchState(store, { kitties })),
      ),
    ),
    createKitty: rxMethod<CreateKitty>(
      pipe(
        switchMap((kitty) => kittyGateway.createKitty(kitty)),
        tap((createdKitty) =>
          patchState(store, { kitties: [...store.kitties(), createdKitty] }),
        ),
      ),
    ),
  })),
);

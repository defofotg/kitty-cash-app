import { TestBed } from '@angular/core/testing';

import { KittyGateway } from '@core/ports/kitty.gateway';
import { FakeKittyGateway } from '@core/adapters/fake-kitty-gateway';
import {
  KittyStatus,
  StubKittyBuilder,
} from '@views/cagnotte/models/kitty.model';
import {
  OverviewState,
  OverviewStateToken,
  OverviewStore,
} from '@views/overview/overview.store';
import { FakeDateProvider } from '@core/adapters/fake-date.provider';
import { DateProvider } from '@core/ports/date.provider';
import { on } from '@app/date.helper';

describe('OverviewStore', () => {
  let kittyGateway: FakeKittyGateway;
  let dateProvider: FakeDateProvider;

  beforeEach(async () => {
    kittyGateway = new FakeKittyGateway();
    dateProvider = new FakeDateProvider();

    TestBed.configureTestingModule({
      providers: [
        OverviewStore,
        { provide: KittyGateway, useValue: kittyGateway },
        { provide: DateProvider, useValue: dateProvider },
      ],
    });
  });

  it('should have default value', () => {
    const store = initStore();
    expect(store.kitties()).toEqual([]);
  });

  it('should retrieve kitties', () => {
    dateProvider.withToday(on('23/07/2024'));
    kittyGateway.kittyById = {
      '001': {
        id: '1',
        name: 'Kitty 1',
        description: 'Description 1',
        goal: 100,
        currentAmount: 50,
        status: KittyStatus.PENDING,
        createdAt: on('23/07/2024'),
        updatedAt: on('23/07/2024'),
        owner: 'Georges DEFO',
      },
      '002': {
        id: '2',
        name: 'Kitty 2',
        description: 'Description 2',
        goal: 200,
        currentAmount: 150,
        status: KittyStatus.PENDING,
        createdAt: on('17/07/2024'),
        updatedAt: on('17/07/2024'),
        owner: 'Ayan DEFO',
      },
    };
    //Initialisation du store
    const store = initStore({ kitties: [] });
    //On récupère les cagnottes du provider et on les stocke dans le store
    store.getKitties();
    expect(store.kitties()).toEqual([
      {
        id: '1',
        name: 'Kitty 1',
        description: 'Description 1',
        goal: 100,
        currentAmount: 50,
        status: KittyStatus.PENDING,
        createdAt: on('23/07/2024'),
        updatedAt: on('23/07/2024'),
        owner: 'Georges DEFO',
      },
      {
        id: '2',
        name: 'Kitty 2',
        description: 'Description 2',
        goal: 200,
        currentAmount: 150,
        status: KittyStatus.PENDING,
        createdAt: on('17/07/2024'),
        updatedAt: on('17/07/2024'),
        owner: 'Ayan DEFO',
      },
    ]);
  });

  it('should retrieve active kitties', () => {
    dateProvider.withToday(on('10/01/2025'));

    const store = initStore({
      kitties: [
        StubKittyBuilder().id('1').status(KittyStatus.PENDING).build(),
        StubKittyBuilder().id('2').status(KittyStatus.OPEN).build(),
      ],
    });

    expect(store.openKitties()).toEqual([
      StubKittyBuilder().id('2').status(KittyStatus.OPEN).build(),
    ]);
  });

  function initStore(partial?: Partial<OverviewState>) {
    TestBed.overrideProvider(OverviewStateToken, { useValue: partial });
    return TestBed.inject(OverviewStore);
  }
});

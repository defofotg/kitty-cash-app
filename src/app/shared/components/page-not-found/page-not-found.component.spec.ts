import { PageNotFoundComponent } from './page-not-found.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { RouterModule } from '@angular/router';

describe('PageNotFoundComponent', () => {
  beforeEach(async () => {
    MockBuilder(PageNotFoundComponent).keep(
      RouterModule.forRoot([
        {
          path: '**',
          component: PageNotFoundComponent,
        },
      ]),
    );
  });

  it('should create', () => {
    // Render RouteComponent.
    const fixture = MockRender(PageNotFoundComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});

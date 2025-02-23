import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverviewStore } from '@app/views/overview/overview.store';
import { TuileComponent } from "../../shared/components/tuile/tuile.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  providers: [OverviewStore],
  imports: [TuileComponent],
})
export class OverviewComponent {
  public readonly store = inject(OverviewStore);

  constructor() {
    this.store.getKitties();
  }
}

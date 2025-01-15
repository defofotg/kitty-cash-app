import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cagnotte',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './cagnotte.component.html',
  styleUrl: './cagnotte.component.scss',
})
export class CagnotteComponent {}

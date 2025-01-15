import { DateProvider } from '@core/ports/date.provider';

export class FakeDateProvider extends DateProvider {
  date: Date = new Date();

  withToday(date: Date) {
    this.date = date;
    return this;
  }

  now(): Date {
    return this.date;
  }
}

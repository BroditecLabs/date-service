import type { DateStrategy } from "./interfaces";

export class DateService implements DateStrategy {
  private strategy: DateStrategy;

  constructor(strategy: DateStrategy) {
    this.strategy = strategy;
  }

  public format = (pattern: string): string => {
    return this.strategy.format(pattern);
  };

  public setLocale = (locale: string): void => {
    this.strategy.setLocale(locale);
  };

  public setTimeZone(timeZone: string): void {
    this.strategy.setTimeZone(timeZone);
  }

  public toDate = (): Date => {
    return this.strategy.toDate();
  };
}

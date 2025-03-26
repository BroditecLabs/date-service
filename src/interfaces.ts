export interface DateStrategy {
  format(pattern: string): string;
  setLocale(locale: string): void;
  setTimeZone(timeZone: string): void;
  toDate(): Date;
}

import dayjs, { extend } from "dayjs";
import utc from "dayjs/plugin/utc";
import dayJSTimezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";

import type { DateStrategy } from "./interfaces";
import { DEFAULT_LOCALE, DEFAULT_TIMEZONE } from "./variables";

extend(utc);
extend(dayJSTimezone);
extend(localizedFormat);

export class DayjsStrategy implements DateStrategy {
  private _date: Date;
  private _locale: string = DEFAULT_LOCALE;
  private _timeZone: string = DEFAULT_TIMEZONE;

  constructor(value: Date | string) {
    this._date = dayjs(value).tz(this._timeZone).toDate();
  }

  public format = (pattern: string): string => {
    return dayjs(this._date).locale(this._locale).format(pattern);
  };

  public setLocale(locale: string): void {
    this._locale = locale;
  }

  public setTimeZone(timeZone: string): void {
    this._timeZone = timeZone;
  }

  public toDate(): Date {
    return dayjs(this._date).toDate();
  }
}

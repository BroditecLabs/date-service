import { DateService } from "./date-service";
import { DayjsStrategy } from "./dayjs-strategy";

export const dateService = (date?: Date | string) => {
  const strategy = new DayjsStrategy(date || new Date());
  return new DateService(strategy);
};

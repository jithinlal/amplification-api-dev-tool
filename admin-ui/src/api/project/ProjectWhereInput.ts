import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  startDate?: DateTimeNullableFilter;
};

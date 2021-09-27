import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  owner?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};

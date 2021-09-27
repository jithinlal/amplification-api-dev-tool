import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};

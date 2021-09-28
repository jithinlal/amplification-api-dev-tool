import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  name?: string;
  owner?: UserWhereUniqueInput;
};

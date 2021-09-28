import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  name: string;
  owner: UserWhereUniqueInput;
};

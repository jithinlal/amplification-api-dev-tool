import { User } from "../user/User";

export type Todo = {
  createdAt: Date;
  id: string;
  name: string;
  owner?: User;
  updatedAt: Date;
};

import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: User;
  createdAt: Date;
  id: string;
  project?: Project;
  stateDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
  updatedAt: Date;
};

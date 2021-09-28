import { Project } from "../project/Project";
import { Task } from "../task/Task";
import { Todo } from "../todo/Todo";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: Array<string>;
  tasks?: Array<Task>;
  todos?: Array<Todo>;
  updatedAt: Date;
  username: string;
};

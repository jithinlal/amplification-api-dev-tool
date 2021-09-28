import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};

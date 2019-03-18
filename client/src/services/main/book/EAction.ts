import { BookActionType } from "../action-types";
import { Book, Comment } from "./model";
type Action =
  { type: BookActionType.ADD_NEW, book: Book, }
  | { type: BookActionType.GET_ALL, books: Book[] }
  | { type: BookActionType.REMOVE, id: string }

export default Action;
import IService from '../../api/IService';
import { Book } from '../models/book.model';
import { odata, API_URL } from '../../api';

const URL = API_URL + '/books';

export class BookAPI implements IService<Book, string>{
  getById(id: string): Promise<Book | null> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Book[]> {
    return odata.get(URL);
  }
  delete(id: string): Promise<boolean> {
    return odata.delete(URL + `/'${id}'`);
  }
  add(model: Book): Promise<Book | null> {
    return odata.post(URL, JSON.stringify(model));
  }
  update(id: string, model: Book): Promise<Book | null> {
    return odata.patch(URL + `/'${model.id}'`, JSON.stringify(model));
  }
}

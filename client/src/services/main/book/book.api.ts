import IService from '../../api/IService';
import { Book } from './model';
import { odata, API_URL } from '../../api';
import fetch from '../../../helpers/fetch';

const URL = API_URL + '/books';

export class BookAPI implements IService<Book, string>{
  getById(id: string): Promise<Book | null> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Book[]> {
    return odata.get(URL);
  }
  delete(id: string): Promise<boolean> {
    return odata.delete(URL + `/${id}`);
  }
  async add(model: Book): Promise<Book | null> {
    var formData = new FormData();
    formData.append('author', model.author + '');
    formData.append('price', model.price + '');
    formData.append('sale', model.sale + '');
    formData.append('title', model.title + '');
    if ((model as any).file) {
      formData.append('file', (model as any).file);
    }

    const result = await fetch(URL, {
      method: 'POST',
      body: formData
    });
    if (result.status === 201) return result.data.data;
    else throw new Error(result.data);
  }
  async update(id: string, model: Book): Promise<Book | null> {
    delete model.photo;
  
    var formData = new FormData();
    formData.append('author', model.author + '');
    formData.append('price', model.price + '');
    formData.append('sale', model.sale + '');
    formData.append('title', model.title + '');
    if ((model as any).file) {
      formData.append('file', (model as any).file);
    }

    const result = await fetch(URL + `/${id}`, {
      method: 'PATCH',
      body: formData
    });
    if (result.status === 200) return result.data.data;
    else throw new Error(result.data);
  }
}

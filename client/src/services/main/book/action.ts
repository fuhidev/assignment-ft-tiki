import { BookActionType } from '../action-types';
import Action from './EAction';

import { alertActions, loading } from '../../main/action';
import { Book } from './model';
import { push } from 'connected-react-router';
import Auth from '../../../modules/Auth';
import authService from '../../api/AuthServices';
import { BookAPI } from './book.api';
var api = new BookAPI();

/**
 * add new book to data store
 * @param book new book model
 */
export const add = (book: Book) => {
  return (dispatch: Function) => {

    dispatch(loading.loadingReady());
    api.add(book)
      .then(book => {
        dispatch({ type: BookActionType.ADD_NEW, book } as Action);
        dispatch(loading.loadingFinish());
      })
      .catch(err => {
        dispatch(alertActions.error(err.message));

      })
      .finally(() =>
        dispatch(loading.loadingFinish())
      );
  }
}

/**
 * Remove book by id
 * @param id id of book model
 */
export const remove = (id: string) => {
  return (dispatch: Function) => {

    dispatch(loading.loadingReady());
    api.delete(id)
      .then(() => {
        dispatch({ type: BookActionType.REMOVE, id } as Action);
        dispatch(loading.loadingFinish());
      })
      .catch(err => {
        dispatch(alertActions.error(err.message));

      })
      .finally(() =>
        dispatch(loading.loadingFinish())
      );
  }
}

/**
 * Get all books from store
 */
export const getAll = () => {
  return (dispatch: Function) => {

    dispatch(loading.loadingReady());
    api.getAll()
      .then((books) => {
        dispatch({ type: BookActionType.GET_ALL, books } as Action);
        dispatch(loading.loadingFinish());
      })
      .catch(err => {
        dispatch(alertActions.error(err.message));

      })
      .finally(() =>
        dispatch(loading.loadingFinish())
      );
  }
}
import { AuthActionType } from '../action-types';
import { alertActions, loading } from '../../main/action';
import { UserResponse,User } from './model';
import { push } from 'connected-react-router';
import Auth from '../../../modules/Auth';
import authService from '../../api/AuthServices';

export const login = (username: string, password: string) => {
  return (dispatch: Function) => {
    dispatch(request({ username }));
    dispatch(loading.loadingReady());
    authService.login(username, password)
      .then(user => {
        // Auth.authenticateUser(user);
        dispatch(success(user));
        dispatch(push('/book-manage'));
        dispatch(loading.loadingFinish());
      })
      .catch(err => {
        dispatch(failure(err.Message));
        dispatch(alertActions.error(err.Message));
        dispatch(loading.loadingFinish());
      })
  }
  function request(user: User) { return { type: AuthActionType.LOGIN_REQUEST, user } }
  function success(user: UserResponse) { return { type: AuthActionType.LOGIN_SUCCESS, user } }
  function failure(error: string) { return { type: AuthActionType.LOGIN_FAILURE, error } }
}

export const logout = () =>
  (dispatch: Function) => {
    dispatch({ type: AuthActionType.LOGOUT });
    dispatch(loading.loadingPage(true));
    // Auth.deauthenticateUser();
    dispatch(alertActions.success('Đăng xuất thành công'));
    // dispatch(push('/'));
    // dispatch(loading.loadingPage(false));
    location.href = '/';
  };
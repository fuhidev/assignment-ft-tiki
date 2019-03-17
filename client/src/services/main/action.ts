import EAction from './EAction';
import { LoadingActionType, AlertActionType } from './action-types';
export * from './user/action';

export const loading = {
  loadingReady, loadingFinish,
  loadingPage
};

function loadingReady(): EAction {
  return { type: LoadingActionType.LOAD }
};
function loadingFinish(): EAction {
  return { type: LoadingActionType.ENDLOAD }
};
function loadingPage(isShow: boolean): EAction {
  if (isShow) {
    return { type: LoadingActionType.LOADINGPAGE_DISPLAY };
  } else {
    return { type: LoadingActionType.LOADINGPAGE_HIDE };
  }
};

export const alertActions = {
  success,
  error,
  clear,
  info
};

function success(message?: string): EAction {
  return {
    type: AlertActionType.SUCCESS, message: message || 'Thành công'
  };
}

function error(message?: string): EAction {
  return {
    type: AlertActionType.ERROR, message: message || 'Thất bại'
  };
}

function clear(): EAction {
  return { type: AlertActionType.CLEAR };
}

function info(message?: string): EAction {
  return { type: AlertActionType.INFO, message: message || '' };
}
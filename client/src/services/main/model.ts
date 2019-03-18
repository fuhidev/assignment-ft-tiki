export * from './user/model';
export * from './book/model';

export interface Alert {
  message?: string
  type?: 'success' | 'error' | 'info' | 'warning'
};

import { API_URL, get } from '.';
import { UserResponse, Profile } from '../../models/MainModel';

const authService = {
  login
};

function login(username: string, password: string): Promise<UserResponse> {
  // Get a token from api server using the fetch api
  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username, password: password
    })
  }).then(res => res.json().then(data => ({ status: res.status, data })))
    .then(res => {
      if (res.status === 200) {
        let user = res.data as UserResponse;
        return (
          res.data.status === 'success' ? Promise.resolve(user)
            : Promise.reject(res.data)
        );
      } else {
        return Promise.reject(res.data);
      }

    });
}

export default authService;
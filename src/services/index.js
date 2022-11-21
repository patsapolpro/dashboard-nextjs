import axios from 'axios';
import { clearLocalStorage, registerLocalStorage, setTokenExpireTime } from '../libs/utility';

function clearAuthLocalStorage() {
  Object.values(AUTH_LOCAL_STORAGE_KEY).map((key) => {
    clearLocalStorage(key);
  });
}

export const signIn = async (params) => {
  const { username, password } = params;
  try {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 60, 
      })
    })
    .then(res => {
      const response = res.json();
      console.log("response : "+ response);
      if(response) {
        registerLocalStorage(AUTH_LOCAL_STORAGE_KEY.JWT_TOKEN, idToken.getJwtToken());
      }
      return response;
    })
  } catch (e) {
    return e;
  }
};

export const currentSession = async () => {
  try {
    const response = await Auth.currentSession();
    registerLocalStorage(AUTH_LOCAL_STORAGE_KEY.JWT_TOKEN, response.getIdToken().getJwtToken());
    const idToken = response.getIdToken();
    setTokenExpireTime(idToken);
    return idToken;
  } catch (error) {
    return error;
  }
};

export const signOut = async () => {
  try {
    clearAuthLocalStorage();
  } catch (error) {
    return error;
  }
};


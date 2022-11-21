import { AUTH_LOCAL_STORAGE_KEY } from '../services/constant';

export function clearLocalStorage(key) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
}

export function registerLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);

    return value;
  } catch (err) {
    clearLocalStorage(key);
    return undefined;
  }
}

export function setTokenExpireTime(token) {
  const tokenExpireTime = new Date(token.payload.exp * 1000);
  registerLocalStorage(AUTH_LOCAL_STORAGE_KEY.EXPIRE_TIME, tokenExpireTime.getTime());
}

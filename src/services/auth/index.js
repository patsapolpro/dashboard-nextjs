import jwt from 'jsonwebtoken';
import { 
  getLocalStorage, 
  registerLocalStorage, 
  setTokenExpireTime 
} from '../../libs/utility';
import { AUTH_LOCAL_STORAGE_KEY } from '../../constant/auth-constant';

const jwtKey = "volkspace"
const jwtExpirySeconds = 3600

const users = {
	admin: "password",
}

export const signIn = async (params) => {
    const { username, password } = params;
    try {
        if (!username || !password || users[username] !== password) {
            return undefined
        }

        await delay(3000)

        const idToken = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        if (idToken) {
          registerLocalStorage(AUTH_LOCAL_STORAGE_KEY.JWT_TOKEN, idToken);
        }
        return { idToken };
    } catch (e) {
      return e;
    }
};

const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
} 

export const currentSession = async () => {
    try {
      const idToken = await getLocalStorage(AUTH_LOCAL_STORAGE_KEY.JWT_TOKEN);
      return jwt.verify(idToken, jwtKey, (err, decoded) => {
        if (err) return false;
        return true;
      });
    } catch (error) {
      console.log(error);
      return false;
    }
};
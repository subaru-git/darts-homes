import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/firebase/client';

export const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const Logout = () => {
  signOut(auth);
};

import { getAnalytics } from 'firebase/analytics';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDUFF7B9267PtHPh3aTORN4Pza6IwLeKHA',
  authDomain: 'darts-homes.firebaseapp.com',
  projectId: 'darts-homes',
  storageBucket: 'darts-homes.appspot.com',
  messagingSenderId: '1099263376734',
  appId: '1:1099263376734:web:ddca149d817e4a072f63cf',
  measurementId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
};

if (!getApps()?.length) {
  const app = initializeApp(firebaseConfig);
  initializeFirestore(app, { ignoreUndefinedProperties: true });
}

export const analytics = typeof window !== 'undefined' ? getAnalytics() : undefined;
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const functions = getFunctions();

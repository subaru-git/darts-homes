import { getAnalytics } from 'firebase/analytics';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG ?? '{}');

if (!getApps()?.length) {
  const app = initializeApp(firebaseConfig);
  initializeFirestore(app, { ignoreUndefinedProperties: true });
}

export const analytics = typeof window !== 'undefined' ? getAnalytics() : undefined;
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const functions = getFunctions();

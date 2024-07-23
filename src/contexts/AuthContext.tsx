'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { auth, db } from '../firebase/client';
import { exportGameHistory, mergeGameHistory, updateLocalHistory } from '@/lib/GameHistoryManager';
import {
  convertFirebaseResultToGameResult,
  convertGameResultToFirebaseResult,
} from '@/lib/Helper/Converter';

type UserContextType = User | null | undefined;

const AuthContext = createContext<UserContextType>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const ref = doc(db, `users/${firebaseUser.uid}`);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const docUser = (await getDoc(ref)).data() as FirebaseUser;
          const localHistory = (await exportGameHistory()) ?? {};
          const remoteHistory = convertFirebaseResultToGameResult(docUser.history);
          const history = mergeGameHistory(localHistory, remoteHistory);
          updateLocalHistory(history);
          const appUser: User = { ...docUser, history };
          setUser(appUser);
          const remoteUser: FirebaseUser = {
            ...docUser,
            history: convertGameResultToFirebaseResult(history),
          };
          await setDoc(ref, remoteUser);
        } else {
          const history = (await exportGameHistory()) ?? {};
          const docUser: FirebaseUser = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName!,
            photoURL: firebaseUser.photoURL!,
            email: firebaseUser.email!,
            history: convertGameResultToFirebaseResult(history),
            createdAt: Date.now(),
          };
          await setDoc(ref, docUser);
          setUser({ ...docUser, history });
        }
      } else {
        setUser(null);
      }
      return unsubscribe;
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

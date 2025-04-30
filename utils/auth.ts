
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'

export const signUp = async (email: string, password: string) => {
  
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const signIn = async (email: string, password: string) => {
  const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const signOut = async () => {
  await signOut();
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  return user;
};






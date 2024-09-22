import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import router from "@/router";
export default {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async register({commit}, {email, password, name}) {
          try {
              // Регистрация пользователя
              const userCredential = await createUserWithEmailAndPassword(auth, email, password, name);
              const user = userCredential.user;
              
              // Сохранение имени и email пользователя в Firestore
              await setDoc(doc(db, "/users", user.uid), {
                  name: name,
                  email: email,
                  notice: [],
                  imgSrc: '',
                  isOnline: false,
                  lastSeen: ''
              });
            } catch (e) {
              console.log(e);
            }
        },
        async login({dispatch, commit}, {email, password}) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
              } catch (e) {
                console.log(e.message);
              }
        },
        async logout({dispatch, commit}) {
            try {
                dispatch('setUserOnlineStatus', false)
                await signOut(auth);
                router.push('/login');
              } catch (e) {
                console.log(e.message);
              }
        },
        async setUserOnlineStatus({dispatch, commit}, isOnline) {
          const userRef = doc(db, `users/${auth.currentUser.uid}`);
          await updateDoc(userRef, {
              isOnline: isOnline,
              lastSeen: isOnline ? null : new Date().toISOString(), // Сохраняем последний визит
          });
        },
    },
}
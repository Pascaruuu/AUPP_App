import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Platform } from 'react-native';

const firebaseConfig = Platform.select({
  ios: {
    apiKey: "AIzaSyABL1_HJfzDXqihmY7M1qyeg-hnZvhTeVQ",
    authDomain: "aupp-app.firebaseapp.com",
    projectId: "aupp-app",
    storageBucket: "aupp-app.appspot.com",
    messagingSenderId: "488948871379",
    appId: "1:488948871379:ios:039e651327cf85d428a426"
  },
  android: {
    apiKey: "AIzaSyAD1BtPnxqcNUTsu7zlnkrQtgvnHVj14C4",
    authDomain: "aupp-app.firebaseapp.com",
    projectId: "aupp-app",
    storageBucket: "aupp-app.appspot.com",
    messagingSenderId: "488948871379",
    appId: "1:488948871379:android:bebb2621f032e6db28a426"
  },
  web: {
    apiKey: "AIzaSyAIyCYXXTEBpFXXkZGDmsC3lrPysPlSdVw",
    authDomain: "aupp-app.firebaseapp.com",
    projectId: "aupp-app",
    storageBucket: "aupp-app.appspot.com",
    messagingSenderId: "488948871379",
    appId: "1:488948871379:web:ae44c541e4fb3b5328a426",
    measurementId: "G-7Q5M6R64P3"
  }
});

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);

console.log('firebaseConfig:', firebaseConfig);
console.log('dba:', db);

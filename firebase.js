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
    // Add your web configuration here
  }
});


export default firebaseConfig;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from "reactfire";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebase_config = {
  apiKey: "AIzaSyA3LfheR5aV-wRH0pIC1XZiadCTiFvBdQc",
  authDomain: "linker-18b75.firebaseapp.com",
  projectId: "linker-18b75",
  storageBucket: "linker-18b75.appspot.com",
  messagingSenderId: "1006222243157",
  appId: "1:1006222243157:web:1d49014a303a4cabbfabdc",
  measurementId: "G-MSHVGSCE85",
};

ReactDOM.createRoot(document.querySelector("body") as HTMLElement).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebase_config}>
      <LoadContext />
    </FirebaseAppProvider>
  </React.StrictMode>
);

function LoadContext(): JSX.Element {
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <StorageProvider sdk={getStorage(useFirebaseApp())}>
        <App />
      </StorageProvider>
    </FirestoreProvider>
  );
}

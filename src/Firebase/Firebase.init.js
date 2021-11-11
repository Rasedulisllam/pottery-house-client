import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

const InitializeFirebase = () => {
    return initializeApp(firebaseConfig);
};

export default InitializeFirebase;
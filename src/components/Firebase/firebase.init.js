import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebas.config";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
    console.log(firebaseConfig);
}
export default firebaseAuthentication;
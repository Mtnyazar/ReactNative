import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBViugRga1PgC7gpQC2dRA0OMIrf3Te9tE",
    authDomain: "mytodo-ec3d1.firebaseapp.com",
    projectId: "mytodo-ec3d1",
    storageBucket: "mytodo-ec3d1.appspot.com",
    messagingSenderId: "832643654396",
    appId: "1:832643654396:web:5be961e4994abcb5dcad79"
}

class Fire {

    constructor(callback) {
        this.init(callback)
    }

    init(callback) {
        if (!firebase.apps.length) {
            fireBase.initializeApp(firebaseConfig)
        }

        fireBase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user)
            }
            else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                    });
            }
        })
    }
}

export default Fire;
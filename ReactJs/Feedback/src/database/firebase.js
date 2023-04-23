import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCXXfAakIiZNFigCz86luLLVN4fS_rdOGQ",
    authDomain: "feedbackform-f3c72.firebaseapp.com",
    projectId: "feedbackform-f3c72",
    storageBucket: "feedbackform-f3c72.appspot.com",
    messagingSenderId: "717774309446",
    appId: "1:717774309446:web:a4e6cab3d99034fc602247",
    measurementId: "G-V37T5BSBW2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default firebase;

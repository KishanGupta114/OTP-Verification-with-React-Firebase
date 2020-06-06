import firebase from 'firebase'

const config={
    apiKey: "AIzaSyDPKmoo7e6p5uKbXG7W7A8U0",
    authDomain: "otp-ve.firebaseapp.com",
    databaseURL: "https://otp.com",
    projectId: "otp-verify-16b2f",
    storageBucket: "otp-2f.appspot.com",
    messagingSenderId: "538529286",
    appId: "1:529286:web:fd58715affb07",
    measurementId: "G-SWMF6"
    // Note--- this is not original keys so use your own api keys bcoz of my safety...
}
firebase.initializeApp(config);
export default firebase
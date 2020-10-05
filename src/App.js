import React from "react";
import logo from "./logo.svg";
import fat from "./fat.png";
import "./App.css";

//import firebase

const firebase = require("firebase/app");

firebase.initializeApp({
    apiKey: "AIzaSyC6YonXAEBN4USm9YNejrgyTmUJYs695rQ",
    authDomain: "fatcancerpatient.firebaseapp.com",
    databaseURL: "https://fatcancerpatient.firebaseio.com",
    projectId: "fatcancerpatient",
    storageBucket: "fatcancerpatient.appspot.com",
    messagingSenderId: "937200699325",
    appId: "1:937200699325:web:912eb0b9f989414c41b4d4",
    measurementId: "G-SXR2066WZV",
});
//import api

function App() {
    return (
        <div className="App">
            <h3>🙏This fat cancer patient is on his death bed🙏</h3>
            <img src={fat} className="imgg" alt="logo" />
            <p>
                His last wish is to get <strong>10Eur RP</strong> card. 🥺🥺
            </p>
            <p>Please make this child happy and donate to</p>
            <span className="highlight">
                <strong>FatCancerPatient@shroogle.ru</strong>
            </span>
            <p>God bless you😇🙏</p>
            <hr />
            <div className="updateDate">20/10/5 21:09 EST Milestone update</div>
            <p>Thank you for all the donations! 😲😳😳😩</p>
            <p>
                For prepaid RP card code click{" "}
                <a href="https://cutt.ly/rgqYdYY">here</a>
            </p>
        </div>
    );
}

export default App;

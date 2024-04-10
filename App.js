import React, { useState ,useEffect} from "react";
import { View, Image, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert,} from "react-native";
import { initializeApp } from "firebase/app"; // Import initializeApp from firebase/app
import { getAnalytics } from "firebase/analytics";
import { getAuth , signInWithPhoneNumber} from "firebase/auth";

import firebase from "firebase/app"; // Import firebase from firebase/app


const firebaseConfig = {
  apiKey: "AIzaSyBnsZbtSIXdp4kg1Fit3L4XuKF80Ri6IpY",
  authDomain: "my-android-app-6d086.firebaseapp.com",
  projectId: "my-android-app-6d086",
  storageBucket: "my-android-app-6d086.appspot.com",
  messagingSenderId: "872108385590",
  appId: "1:872108385590:web:9b15203def0bf11440bf97",
  measurementId: "G-C2CCVCZQDC"
};


const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [auth, setAuth] = useState(null);

  const handleLogin = async () => {
    const app = initializeApp(firebaseConfig);
    const authInstance = getAuth(app);

    try {
      const confirmationResult = await signInWithPhoneNumber(authInstance, `+91${mobileNumber}`);
      setVerificationId(confirmationResult.verificationId);
      // Prompt user to enter OTP
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP. Please try again later.");
    }
  };

  const handleOtpVerification = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
      const userCredential = await auth.signInWithCredential(credential);
      console.log(userCredential)
      // OTP verified successfully, handle login
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Alert.alert("Error", "Invalid OTP. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button title="Send OTP" onPress={handleLogin} />
      {/* OTP input field and verify button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginPage;
import React, { useState ,useEffect} from "react";
import { View, Image, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert,} from "react-native";
import { initializeApp } from "firebase/app"; // Import initializeApp from firebase/app
import { getAnalytics } from "firebase/analytics";
import { getAuth , signInWithPhoneNumber, PhoneAuthProvider, RecaptchaVerifier,  signInWithCredential,} from "firebase/auth";

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
  const [showOtpBox, setShowOtpBox] = useState(false);
const [verificationId,setVerificationId]=useState("");
  const [auth, setAuth] = useState(null);

  useEffect(() => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const authInstance = getAuth(app);
  authInstance.languageCode = 'it';
  // console.log("Auth initialized:", authInstance);
  setAuth(authInstance);
  // console.log(authInstance);
}, []);// Empty dependency array ensures useEffect runs only once on component mount
const handleLogin = async () => {
  console.log("Auth object:", auth);
  if (!auth) {
    console.error("Auth object is not initialized.");
    return;
  }

  if (mobileNumber.length !== 10) {
    Alert.alert("Error", "Please enter a valid 10-digit mobile number.");
    return;
  }

  try {
    const appVerifier = new RecaptchaVerifier(auth,"recaptcha-container", {
      size: "invisible",
    });
   console.log(appVerifier);
    const confirmationResult = await signInWithPhoneNumber(auth,`+91${mobileNumber}`,appVerifier);
    setVerificationId(confirmationResult.verificationId)
    // console.log("verificationid:",verificationId)
    setShowOtpBox(true);
  } catch (error) {
    console.error("Error sending OTP:", error);
    Alert.alert("Error", "Failed to send OTP. Please try again later.");
  }
};


  const handleOtpVerification = async () => {
    if (!auth) return; // Ensure auth is initialized
console.log(verificationId)
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    
    await signInWithCredential(auth,credential)
      .then((result) => {
        Alert.alert("Success", "OTP Verified Successfully");
       console.log("successfull app")
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        Alert.alert("Error", "Invalid OTP. Please try again.");
      });
  };


  return (
    <View style={styles.container}>
      <Image source="" style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.mobileNumberTitle}>Mobile Number:</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
       <View id="recaptcha-container"></View>
      <Button title="Send OTP" onPress={handleLogin} />
      {showOtpBox && (
        <View style={styles.otpContainer}>
          <Text style={styles.otpText}>
            Please enter the OTP sent to your mobile number
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleOtpVerification}
          >
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  titleContainer: {
    flexDirection: "",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  mobileNumberTitle: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: "5%",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  otpContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  otpText: {
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  verifyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginPage;
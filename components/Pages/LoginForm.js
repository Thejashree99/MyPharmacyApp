import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Customh1 from "../../components/Customh1/Customh1";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../button/button";

const loginvalidationschema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least${min} characters`)
    .required("Password is required"),
});

const LoginForm = ({ onlogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/Images/PharmacyLogo.png")}
          style={styles.image}
        ></Image>
      </View>

      <Customh1>Hi, Welcome Back!👋 </Customh1>
      <View style={styles.LoginContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginvalidationschema}
          onSubmit={(values) => {
            // onlogin(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your username"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Text style={styles.text}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.passwordInput]}
                    placeholder="••••••••••••"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={!passwordVisible}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon
                      name={passwordVisible ? "eye" : "eye-off"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.forgotPassContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.forgottext}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <CustomButton onPress={handleSubmit} title="Log in" />
            </View>
          )}
        </Formik>
        <View style={styles.signupContianer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContianer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  signupLink: {
    fontSize: 14,
    fontWeight: "bold", // Make the link stand out
  },
  LoginContainer: {
    width: "100%",
    padding: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 9,
    height: 60,
    marginBottom: 10,
    paddingRight: 10, // space for the icon inside the input field
  },
  passwordInput: {
    flex: 1, // this allows the input field to take up the remaining space
    paddingLeft: 10, // padding inside the input field
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 30,
    resizeMode: "cover",
  },
  text: {
    fontSize: 13,
    marginBottom: 6,
    fontFamily: "Poppins",
  },
  forgottext: {
    textAlign: "right",
  },
  forgotPassContainer:{
    marginBottom: 100
  }
});

export default LoginForm;

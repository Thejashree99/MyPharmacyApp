// ForgotPasswordScreen.js

import React from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
import Customh1 from "../Customh1/Customh1";
import { Formik } from "formik";
import * as yup from "yup";
import CustomButton from "../button/button";

const ForgotPassvalidationschema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});
const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.Wrapper}>
      <Customh1>Forgot password?</Customh1>
      <Text>
        Don’t worry! It happens. Please enter the email associated with your
        account.
      </Text>
      <View>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPassvalidationschema}
          onSubmit={(values) => {
            onlogin(values);
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
                <Text style={styles.text}>Email address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <CustomButton onPress={handleSubmit} title="Send Code" />
              </View>
            </View>
          )}
          
        </Formik>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Wrapper: {
    width: "100%",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  text: {
    fontSize: 13,
    marginBottom: 6,
    fontFamily: "Poppins",
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
});
export default ForgotPassword;

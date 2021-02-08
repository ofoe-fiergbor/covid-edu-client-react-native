import React, { useState } from "react";
import styles from "./styles";
import { Formik } from "formik";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { useMutation } from "@apollo/client";
import { register } from "../../../../src/backend/redux/actions/authAction";
import { values } from "../../../constants/index";
import AuthInput from "../../components/AuthInput/AuthInput";
import Button from "../../../views/components/button/Button";

import { REGISTER_NEW_USER } from "../../../backend/graphql/regiser";

const Register = ({ navigation: { navigate }, register }) => {
  const [variables, setVariables] = useState({});
  const [errors, setErrors] = useState({});

  const [registerUser, { error, loading }] = useMutation(REGISTER_NEW_USER, {
    variables: variables,
    update(proxy, result) {
      register(result?.data?.register);
      console.log(result);
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
  });
  return (
    <View style={styles.container}>
      <Formik
        initialValues={values.registerValues}
        onSubmit={(values, action) => {
          action.resetForm();
          setVariables(values);
          registerUser();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <React.Fragment>
            <View style={{ marginVertical: 10 }}>
              <AuthInput
                placeholder="Full Name"
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                ioniconName="md-person"
              />

              <AuthInput
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange("username")}
                ioniconName="md-person"
              />
              <AuthInput
                placeholder="Phone Number"
                value={values.phone}
                onChangeText={handleChange("phone")}
                ioniconName="md-call"
                keyboard="number"
                maxLength={10}
              />

              <AuthInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                keyboard="email"
                ioniconName="md-mail"
              />
              <AuthInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                ioniconName="md-key"
                secureTextEntry={true}
              />
              <AuthInput
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                ioniconName="md-key"
                secureTextEntry={true}
              />
            </View>
            {Object.keys(errors).length > 0 && (
              <View>
                {Object.values(errors).map((err) => (
                  <Text key={err} style={styles.errorText}>
                    {err}
                  </Text>
                ))}
              </View>
            )}
            <View style={{ alignItems: "center" }}>
              <Button
                buttonStyle={styles.buttonContainer}
                textStyle={{ color: "#fff" }}
                buttonName="Register"
                onPress={handleSubmit}
              />
              <Text>or</Text>
              <Button
                buttonStyle={styles.loginButtonContainer}
                textStyle={styles.loginText}
                buttonName="Login"
                onPress={() => navigate("login")}
              />
            </View>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

export default connect(null, { register })(Register);

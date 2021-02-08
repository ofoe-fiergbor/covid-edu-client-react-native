import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Formik } from "formik";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";
import { values } from "../../../constants/index";
import AuthInput from "../../components/AuthInput/AuthInput";
import Button from "../../../views/components/button/Button";
import { register } from "../../../../src/backend/redux/actions/authAction";
import { LOGIN_WITH_PHONE_AND_PASSWORD } from "../../../backend/graphql/login";

const Login = ({ navigation: { navigate }, register }) => {
  const [variables, setVariables] = useState({});
  const [errors, setErrors] = useState({});

  const [loginUser, { error, loading }] = useMutation(
    LOGIN_WITH_PHONE_AND_PASSWORD,
    {
      variables: variables,
      update(proxy, result) {
        console.log(result);
        register(result?.data?.register);
      },
      onError(err) {
        setErrors(err?.graphQLErrors[0]?.extensions?.errors);
      },
    }
  );

  return (
    <View style={styles.container}>
      <Formik
        initialValues={values.loginValues}
        onSubmit={(values, action) => {
          action.resetForm();
          setVariables(values);
          loginUser();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <React.Fragment>
            <View style={{ marginVertical: 20 }}>
              <AuthInput
                placeholder="Phone Number"
                value={values.phone}
                onChangeText={handleChange("phone")}
                ioniconName="md-call"
                keyboard="number"
                maxLength={10}

              />

              <AuthInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                ioniconName="md-key"
                secureTextEntry={true}
              />
            </View>
            {Object.keys(errors).length > 0 && (
              <View>
                {Object?.values(errors)?.map((err) => (
                  <Text key={err} style={styles.errorText}>
                    {err}
                  </Text>
                ))}
              </View>
            )}
            <View style={{ alignItems: "center" }}>
              <Button
                buttonStyle={styles.buttonContainer}
                buttonName="Login"
                textStyle={{ color: "#fff" }}
                onPress={handleSubmit}
              />
              <Text>or</Text>
              <Button
                buttonStyle={styles.loginButtonContainer}
                textStyle={styles.loginText}
                buttonName="Register"
                onPress={() => navigate("register")}
              />
            </View>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

export default connect(null, { register })(Login);

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../../backend/redux/actions/authAction";

const News = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text></Text>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "orange" }}
        onPress={() => logout()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { logout })(News);

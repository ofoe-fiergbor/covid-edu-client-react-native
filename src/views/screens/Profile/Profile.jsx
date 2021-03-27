import React from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "./styles";
import man from "../../../../assets/images/dummy/male1.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { connect } from "react-redux";
import { logout } from "../../../backend/redux/actions/authAction";

const Profile = ({ navigation: { navigate }, logout, user, post }) => {
  const userLogout = () => {
    Alert.alert(
      "Logout",
      `Hi ${user.givenName}, are you sure you want to logout?`,
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => logout(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: `${user?.photoUrl}` } ?? man}
          style={styles.topContainerImage}
        />
        <Text style={styles.topContainerName}>{user?.name}</Text>
        <Text style={styles.topContainerEmail}>{user?.email}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerInner}>
          {/*********** All Posts ***********/}
          <TouchableOpacity
            onPress={() => navigate("allPosts", { user, post })}
          >
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="chatbubbles-outline"
                  size={25}
                  style={styles.chatIcon}
                />
                <Text style={styles.itemText}>Your Posts</Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={28}
                style={styles.goIcon}
              />
            </View>
          </TouchableOpacity>

          {/*********** Covid Tips ***********/}
          <TouchableOpacity onPress={() => navigate("tips")}>
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="md-bulb-outline"
                  size={25}
                  style={styles.bulbIcon}
                />
                <Text style={styles.itemText}>Covid-19 Tips</Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={28}
                style={styles.goIcon}
              />
            </View>
          </TouchableOpacity>

          {/*********** Frequently Asked Questions ***********/}
          <TouchableOpacity onPress={() => navigate("faq")}>
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="question"
                  size={25}
                  style={styles.questionIcon}
                />
                <Text style={styles.itemText}>Asked Questions</Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={28}
                style={styles.goIcon}
              />
            </View>
          </TouchableOpacity>

          {/*********** Logout ***********/}
          <TouchableOpacity onPress={userLogout}>
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <Feather name="log-out" size={25} style={styles.logoutIcon} />
                <Text style={styles.itemText}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state?.auth?.user,
    post: state?.post?.post,
  };
};
export default connect(mapStateToProps, { logout })(Profile);

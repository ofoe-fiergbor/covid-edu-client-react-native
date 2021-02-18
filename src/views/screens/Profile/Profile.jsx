import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import man from "../../../../assets/images/dummy/male1.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { connect } from "react-redux";
import { logout } from "../../../backend/redux/actions/authAction";

const Profile = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image source={man} style={styles.topContainerImage} />
        <Text style={styles.topContainerName}>Leonado da Vinci</Text>
        <Text style={styles.topContainerEmail}>leo@vinc.com</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerInner}>
          {/*********** All Posts ***********/}
          <TouchableOpacity onPress={() => navigate("allPosts")}>
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="chatbubbles-outline"
                  size={25}
                  style={styles.chatIcon}
                />
                <Text style={styles.itemText}>All Posts</Text>
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
          <TouchableOpacity onPress={() => logout()}>
            <View style={styles.bottomContainerInnerView}>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="logout" size={25} style={styles.logoutIcon} />
                <Text style={styles.itemText}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.version}>Version: 1.0.0</Text>
      </View>
    </View>
  );
};

export default connect(null, { logout })(Profile);

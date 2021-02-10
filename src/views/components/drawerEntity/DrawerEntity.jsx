import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import styles from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

function DrawerEntity(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  <Text numberOfLines={1}>hahaha</Text>
                </Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="My Wall"
              onPress={() => {
                props.navigation.navigate("My Wall");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate("My Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bulb1" color={color} size={size} />
              )}
              label="Tips"
              onPress={() => {
                props.navigation.navigate("Tips");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="question" color={color} size={size} />
              )}
              label="FAQ"
              onPress={() => {
                props.navigation.navigate("FAQ");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerEntity;



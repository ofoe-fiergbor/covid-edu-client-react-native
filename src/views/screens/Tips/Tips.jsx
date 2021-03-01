import React, { Component } from "react";
import styles from "./styles";
import { colors, values } from "../../../constants";
import { Image, TouchableOpacity, Linking } from "react-native";
import { Container, Content, Icon, Accordion, Text, View } from "native-base";

export default class Tips extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={styles.header}>
        <Image source={item.image} />
        <Text style={styles.headerText} numberOfLines={2}>
          {item.title}
        </Text>
        {expanded ? (
          <Icon style={styles.icon2} name="remove-circle" />
        ) : (
          <Icon style={styles.icon} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <View>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.content2}>{item.link}</Text>
        </TouchableOpacity>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    );
  }
  render() {
    return (
      <Container>
        <Text style={styles.faqHeader}>Some Corona virus Tips</Text>
        <Content padder style={{ backgroundColor: colors.whiteGradient }}>
          <Accordion
            dataArray={values.dataArray}
            expanded={[0]}
            animation={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
<br />;

import React, { Component } from "react";
import { Container, Content, Icon, Accordion, Text, View } from "native-base";
import { colors, values } from "../../../constants";
import styles from "./styles";

export default class Faq extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={styles.header}>
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
    return <Text style={styles.content}>{item.content}</Text>;
  }
  render() {
    return (
      <Container>
        <Text style={styles.faqHeader}>Frequently Asked Questions</Text>
        <Content padder style={{ backgroundColor: colors.whiteGradient }}>
          <Accordion
            expanded={[0]}
            animation={true}
            renderHeader={this._renderHeader}
            dataArray={values.FAQ_DATA_ARRAY}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
<br />;

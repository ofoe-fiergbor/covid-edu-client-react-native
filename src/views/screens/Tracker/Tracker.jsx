import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator,Image } from "react-native";
import TrackerTemplate from "./TrackerTemplate";
import Header from "../../components/CustomHeader/Header";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import bg from '../../../../assets/images/png/bg.png'
export default class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      loading: true,
    };
  }
  fetchUpdates = () => {
    fetch("https://mazitekgh.com/covid19/v1/")
      .then((res) => res.json())
      .then((response) => {
        let coronaData = {
          ghanaCases: response.ghana.existing,
          ghanaconfirmedCases: response.ghana.confirmed,
          ghanaRecoveries: response.ghana.recovered,
          ghanaFatalities: response.ghana.deaths,
          date: response.ghana.date,
          time: response.ghana.time,
          globalCases: response.global.existing,
          globalconfirmedCases: response.global.confirmed,
          globalRecoveries: response.global.recovered,
          globalFatalities: response.global.deaths,
        };
        this.setState({
          updates: coronaData,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchUpdates();
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#3b5998" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header />
          <ScrollView>
            <Image source={bg} style={styles.image}/>
            <TrackerTemplate coronaData={this.state.updates} />
          </ScrollView>
        </View>
      );
    }
  }
}

import React, { Component, useState, useEffect } from "react";
import { View, Image } from "react-native";
import TrackerTemplate from "./TrackerTemplate";
import Header from "../../components/CustomHeader/Header";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import bg from "../../../../assets/images/png/bg.png";
import NewsSkeleton from "../Skeleton/NewsSkeleton";

export default function Tracker() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUpdates = () => {
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

        setUpdates(coronaData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <NewsSkeleton />
      ) : (
        <View style={styles.container}>
          <Header />
          <ScrollView>
            <Image source={bg} style={styles.image} />
            <TrackerTemplate coronaData={updates} />
          </ScrollView>
        </View>
      )}
    </React.Fragment>
  );
}

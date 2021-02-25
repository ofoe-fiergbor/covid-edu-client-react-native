import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { CountUp } from "use-count-up";

function TrackerTemplate(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const {
    ghanaconfirmedCases,
    ghanaRecoveries,
    ghanaFatalities,
    date,
    time,
    globalconfirmedCases,
    globalRecoveries,
    globalFatalities
  } = props.coronaData;
  return (
    <View style={styles.datailsContainer}>
      {/*********** Ghana Cases *************/}
      <View style={styles.ghanaCard}>
        <Text style={styles.title}>Coronavirus cases in Ghana</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            Last Updated: {date} {time}
          </Text>
        </View>
        <View style={styles.ghanaCardInner}>
          <View style={styles.singleghanaCard1}>
            <Text style={styles.heading}>Active Cases</Text>
            <Text style={styles.number}>
              {numberWithCommas(ghanaconfirmedCases - ghanaRecoveries - ghanaFatalities)}
            </Text>
          </View>
          <View style={styles.singleghanaCard2}>
            <Text style={styles.heading}>Infected</Text>
            <Text style={styles.number}>{numberWithCommas(ghanaconfirmedCases)}</Text>
          </View>
        </View>
        <View style={styles.ghanaCardInner}>
          <View style={styles.singleghanaCard3}>
            <Text style={styles.heading}>Recoveries</Text>
            <Text style={styles.number}>{numberWithCommas(ghanaRecoveries)}</Text>
          </View>
          <View style={styles.singleghanaCard4}>
            <Text style={styles.heading}>Deaths</Text>
            <Text style={styles.number}>{numberWithCommas(ghanaFatalities)}</Text>
          </View>
        </View>
        
      </View>

      {/*********** Ghana Cases *************/}
      <View style={styles.ghanaCard}>
        <Text style={styles.title}>Global Cases</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            Last Updated: {date} {time}
          </Text>
        </View>
        <View style={styles.globalCard}>
          <View style={styles.cardContainer}>
            <Text style={styles.infectedText}>Infected</Text>
            <Text style={styles.infectedText1}>{numberWithCommas(globalconfirmedCases)}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.recoveredText}>Recovered</Text>
            <Text style={styles.recoveredText1}>{numberWithCommas(globalRecoveries)}</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.deathText}>Deaths</Text>
            <Text style={styles.deathText1}>{numberWithCommas(globalFatalities)}</Text>
          </View>
        </View>
       
      </View>
    </View>
  );
}

export default TrackerTemplate;

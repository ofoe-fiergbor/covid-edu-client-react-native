import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import TrackerCard from "./../../components/TrackerCard/TrackerCard";
import InternationalTrackerCard from "../../components/internationalTrackerCard/InternationalTrackerCard";

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
    globalFatalities,
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
          <TrackerCard
            heading="Active Cases"
            renderData={numberWithCommas(
              ghanaconfirmedCases - ghanaRecoveries - ghanaFatalities
            )}
          />

          <TrackerCard
            heading="Infected"
            containerStyles={styles.borderRed}
            renderData={numberWithCommas(ghanaconfirmedCases)}
          />
        </View>
        <View style={styles.ghanaCardInner}>
          <TrackerCard
            heading="Recoveries"
            containerStyles={styles.borderGreen}
            renderData={numberWithCommas(ghanaRecoveries)}
          />

          <TrackerCard
            heading="Deaths"
            containerStyles={styles.borderBlack}
            renderData={numberWithCommas(ghanaFatalities)}
          />
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
          <InternationalTrackerCard
            color={styles.redColor}
            renderInfo={numberWithCommas(globalconfirmedCases)}
            heading="Infected"
          />

          <InternationalTrackerCard
            color={styles.greenColor}
            renderInfo={numberWithCommas(globalRecoveries)}
            heading="Recovered"
          />

          <InternationalTrackerCard
            color={styles.blackColor}
            renderInfo={numberWithCommas(globalFatalities)}
            heading="Deaths"
          />
        </View>
      </View>
    </View>
  );
}

export default TrackerTemplate;

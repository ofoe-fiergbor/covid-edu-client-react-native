import React, { useState, useCallback, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";

export default function YoutubeIframe({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  let videoId = "";
  if (videoUrl) {
    let tempArr = videoUrl.split("https://youtu.be/");
    videoId = tempArr[1];
  }

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={190}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      {playing ? (
        <TouchableOpacity onPress={togglePlaying} style={styles.button}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={togglePlaying} style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

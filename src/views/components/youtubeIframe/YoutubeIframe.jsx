import React, { useState, useCallback, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";

export default function YoutubeIframe({ videoUrl }) {
  let videoId = "";
  if (videoUrl) {
    let tempArr = videoUrl.split("https://youtu.be/");
    videoId = tempArr[1];
  }

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      alert("video has finished playing!");
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
      <TouchableOpacity onPress={togglePlaying} style={styles.button}>
        <Text style={styles.buttonText}>{playing ? "pause" : "play"}</Text>
      </TouchableOpacity>
    </View>
  );
}

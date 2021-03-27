import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View } from "react-native";

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

  return (
    <View>
      <YoutubePlayer
        height={190}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
}

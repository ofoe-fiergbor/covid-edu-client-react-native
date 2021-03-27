import React, { useState, useEffect } from "react";
import styles from "./styles";
import Skeleton from "../Skeleton/Skeleton";
import { dimensions } from "../../../constants";
import NewsDetail from "../NewsDetail/NewsDetail";
import newsKeys from "./../../../backend/apiKeys/NewsWall";
import { View, FlatList, Share, LogBox } from "react-native";
import BottomNewsDetail from "../NewsDetail/BottomNewsDetail";
import NewsHeader from "../../components/CustomHeader/NewsHeader";
import BottomNewsHeader from "../../components/CustomHeader/BottomNewsHeader";

LogBox.ignoreAllLogs();

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch News One
  const fetchNews = () => {
    fetch(newsKeys.BASE_URL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": newsKeys.RAPID_API_HOST,
        "x-rapidapi-key": newsKeys.RAPID_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  //Share Article
  const sharearticle = async (article) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + article,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Skeleton />
      ) : (
        <View style={styles.container}>
          <NewsHeader />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={news.slice(0, 4)}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{
              paddingLeft: dimensions.padding.sm,
            }}
            
            renderItem={({ item }) => {
              return (
                <NewsDetail
                  image={item.media}
                  url={item.link}
                  title={item.title}
                  date={item.published_date}
                  summary={item.summary}
                  source={item.clean_url}
                  topic={item.topic}
                  article={sharearticle}
                />
              );
            }}
          />

          <BottomNewsHeader />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={news}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <BottomNewsDetail
                  image={item.media}
                  url={item.link}
                  title={item.title}
                  date={item.published_date}
                  summary={item.summary}
                  source={item.author}
                  topic={item.topic}
                  article={sharearticle}
                />
              );
            }}
          />
        </View>
      )}
    </React.Fragment>
  );
}

export default News;

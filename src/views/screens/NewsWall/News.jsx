import React, { useState, useEffect } from "react";
import BottomNewsHeader from "../../components/CustomHeader/BottomNewsHeader";
import NewsHeader from "../../components/CustomHeader/NewsHeader";
import BottomNewsDetail from "../NewsDetail/BottomNewsDetail";
import { View, FlatList, Share, LogBox } from "react-native";
import NewsDetail from "../NewsDetail/NewsDetail";
import { dimensions } from "../../../constants";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./styles";

LogBox.ignoreAllLogs();

function News() {
  const [news, setNews] = useState([]);
  const [newsTwo, setNewsTwo] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch News One
  const fetchNews = () => {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?q=coronavirus&lang=en&media=True",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "x-rapidapi-key":
            "4797fbff69msh206c52ea361382fp183ae2jsnff7bdaf2dd33",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Fetch News Two
  const fetchNewsTwo = () => {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "x-rapidapi-key":
            "4797fbff69msh206c52ea361382fp183ae2jsnff7bdaf2dd33",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setNewsTwo(response.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNews();
    fetchNewsTwo();
  }, []);

  //Share Article One
  const sharearticle = async (article) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + article,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Share Article Two
  const sharearticletwo = async (article) => {
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
            data={news}
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
            data={newsTwo}
            keyExtractor={(item) => item.summary}
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
                  article={sharearticletwo}
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

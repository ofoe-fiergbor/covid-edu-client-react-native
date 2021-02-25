import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Share,
  LogBox,
} from "react-native";
import Header from "../../components/CustomHeader/Header";
import { colors, dimensions } from "../../../constants";
import NewsDetail from "../NewsDetail/NewsDetail";
import styles from "./styles";
import BottomNewsDetail from "../NewsDetail/BottomNewsDetail";
import NewsHeader from "../../components/CustomHeader/NewsHeader";
import BottomNewsHeader from "../../components/CustomHeader/BottomNewsHeader";
import Skeleton from "../Skeleton/Skeleton";
LogBox.ignoreAllLogs();
class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      newsTwo: [],
      loading: true,
    };
  }
  //Fetch News One
  fetchNews = () => {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=coronavirus",
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
        this.setState({
          news: response.articles,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Fetch News Two
  fetchNewsTwo = () => {
    fetch(
      "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid-19",
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
        this.setState({
          newsTwo: response.articles,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchNews();
    this.fetchNewsTwo();
  }

  //Share Article One
  sharearticle = async (article) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + article,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Share Article Two
  sharearticletwo = async (article) => {
    try {
      await Share.share({
        message: "Kindly check this article out " + article,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={{}}>
          <Skeleton />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <NewsHeader />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.news}
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
                  source={item.author}
                  topic={item.topic}
                  article={this.sharearticle}
                />
              );
            }}
          />

          <BottomNewsHeader />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.newsTwo}
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
                  article={this.sharearticletwo}
                />
              );
            }}
          />
        </View>
      );
    }
  }
}

export default News;

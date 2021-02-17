import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import PostDetail from "../PostDetail/PostDetail";
import { colors, dimensions } from "../../../constants";


const Post = () => {
  const DATA = [
    {
      firstName: "Leonardo",
      lastName: "da Vinci",
      email: "leo@nardo.com",
      date: "01 Jan 2020",
      image: require("../../../../assets/images/dummy/male1.jpg"),
      text:
        "Lorem, ipsum dolor sit amet  elit. Suscipit corporis velit eligendi nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat? expedita itaque, perferendis repellat fugiat magnam fuga!",
      id: "1",
    },
    {
      firstName: "Mary",
      lastName: "santa cruz",
      email: "santa@cruz.com",
      date: "13 Mar 2020",
      text:
        "Lorem, ipsum dolor sit  adipisicing elit. Suscipit corporis velit eligendi nesciunt Lorem ipsum dolor sit amet consecexpedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female1.jpg"),
      id: "2",
    },
    {
      firstName: "Newman",
      lastName: "Amy",
      email: "amy@gmail.com",
      date: "20 Apr 2020",
      text:
        "Lorem, ipsum dolor sit amet  elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female2.jpg"),
      id: "3",
    },
    {
      firstName: "Jibril",
      lastName: "Kareem",
      email: "jib@aaa.com",
      date: "21 Apr 2020",
      text:
        "Lorem, ipsum dolor sit amet adipisicing elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/male2.jpg"),
      id: "4",
    },
    {
      firstName: "Cecil",
      lastName: "Obasanjo",
      email: "cil@ymail.com",
      date: "29 Apr 2020",
      text:
        "Lorem, sit amet consectetur adipisicing elit. Suscipit corporis velit eligendi nesciunt expedita itaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat? perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female3.jpg"),
      id: "5",
    },
    {
      firstName: "Lydia",
      lastName: "Brown",
      email: "lyb@ttt.com",
      date: "12 May 2020",
      text: 
        "Lorem, ipsum dolor sit amet consectetur elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam Lorem ipsum dolor sit amet consecte fuga!",
      image: require("../../../../assets/images/dummy/female4.jpg"),
      id: "6",
    },
    {
      firstName: "Afroza",
      lastName: "Khan",
      email: "afrolight@ggg.com",
      date: "16 May 2020",
      text:
        "Lorem, ipsum dolor sit amet consectetur  elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female5.jpg"),
      id: "7",
    },
    {
      firstName: "Alex",
      lastName: "Walts",
      email: "aly@walts.com",
      date: "08 June 2020",
      text:
        "Lorem, ipsum dolor sit adipisicing elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female6.jpg"),
      id: "8",
    },
    {
      firstName: "Loiussa",
      lastName: "Mane",
      email: "lewi@vuiton.com",
      date: "12 May 2020",
      text:
        "Lorem, ipsum dolor consectetur adipisicing elit. Suscipit corporis velit eligendi nesciunt expedita itaque, perferendis repellat fugiat magnam fuga!",
      image: require("../../../../assets/images/dummy/female7.jpg"),
      id: "9",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteGradient }}>
      <StatusBar auto />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: dimensions.padding.sm,
          paddingTop: StatusBar.currentHeight || 42
        }}
        renderItem={({ item }) => {
          return (
            <PostDetail
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              date={item.date}
              image={item.image}
              text={item.text}
            />
          );
        }}
      />
    </View>
  );
};

export default Post;

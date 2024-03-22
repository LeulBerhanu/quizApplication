import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Questions({ route }) {
  const { QuestionType } = route.params;

  const [count, setCount] = useState(0);
  const [countScore, setcountScore] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(2);
  const [answered, checkAnswered] = useState(false);
  const [correctAns, setCorrectsAns] = useState("");
  const [BtnDisable, setBtnDisable] = useState(false);
  const size = QuestionType.length;

  return (
    <ImageBackground
      source={require("../assets/images/f.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ paddingTop: 40, paddingHorizontal: 10, flex: 1 }}>
        <Text
          style={{
            color: "blue",
            fontWeight: "700",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          {count + 1}. {QuestionType[count].question}
        </Text>
        {QuestionType[count].options.map((item, index) => (
          <TouchableOpacity
            disabled={answered}
            key={Math.random().toString()}
            onPress={() => {
              if (
                index === QuestionType[count].answer ||
                item === QuestionType[count].answer
              ) {
                setcountScore(countScore + 1);
                setAnswerChecked(1);
                checkAnswered(true);
              } else {
                setAnswerChecked(0);
                const answer = QuestionType[count].answer;
                checkAnswered(true);
                setCorrectsAns(
                  QuestionType[count].options[answer] ||
                    QuestionType[count].answer
                );
              }
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: "green",
                margin: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                borderStyle: "dotted",
                borderWidth: 3,
                borderColor: "yelloe",
              }}
            >
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end",
            marginVertical: 20,
          }}
        >
          <Button title="back" onPress={() => setCount(count - 1)} />

          <Button
            title="View Score"
            onPress={() => {
              Alert.alert(
                "SCORE",
                `You have answered ${countScore} question out of ${
                  count + 1
                } questions `
              );
            }}
          />
          <Button
            disabled={BtnDisable}
            title="next"
            onPress={() => {
              if (count === size - 2) {
                setBtnDisable(true);
              }
              setCount(count + 1);
              setAnswerChecked(2);
              checkAnswered(false);
              setCorrectsAns("");
            }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <Text style={{ fontSize: 20, marginRight: 10 }}>Answer:</Text>
            {answerChecked == 1 && (
              <AntDesign name="checkcircle" size={34} color="green" />
            )}
            {answerChecked == 0 && (
              <FontAwesome name="times" size={34} color="red" />
            )}
          </View>

          <Text style={{ fontSize: 20, marginRight: 10 }}>
            Correct Answer:{correctAns}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

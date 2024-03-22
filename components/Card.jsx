import { View, Text, Image } from "react-native";
import React from "react";

export default function Card({ title, Images }) {
  return (
    <View style={{ alignItems: "center", margin: 5 }}>
      <Image
        source={Images}
        style={{
          height: 120,
          width: 120,
          borderRadius: 60,
          objectFit: "cover",
        }}
      />
      <View style={{ backgroundColor: "#000", top: -80, padding: 2 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "900",
            flexDirection: "row",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

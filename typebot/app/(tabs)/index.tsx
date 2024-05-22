import { StyleSheet, Text, View } from "react-native";
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Mundo</Text>
      <Bubble
        typebot="my-typebot-4bmtylz"
        previewMessage={{
          message: "Eiiiii! Posso te ajudar?",
          avatarUrl:
            "https://s3.typebot.io/public/workspaces/clve2hhb9001h6xro5tog4tgt/typebots/clvy1xs170033px24e4bmtylz/hostAvatar?v=1715794263970",
        }}
        theme={{
          button: {
            backgroundColor: "#3429d1",
            customIconSrc:
              "data:image/svg+xml;utf8,<svg fill='%23ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d='M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z'/></svg>",
          },
          previewMessage: {
            backgroundColor: "#598E71",
            textColor: "#FFFFFF",
            closeButtonBackgroundColor: "#C75F96",
            closeButtonIconColor: "#9B74B7",
          },
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: "2%",
    backgroundColor: "#e9e9e9"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20
  }
});

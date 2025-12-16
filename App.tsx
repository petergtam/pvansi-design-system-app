import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
} from "react-native";
import {
  Body,
  Body2,
  Caption,
  Colors,
  Headline,
  LargeTitle,
  LargeTitle2,
  SubHeadline,
  SubHeadline2,
  Title,
  Title2,
  Title3,
  Text,
  Typography,
} from "pvansi-design-system-example";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <LargeTitle2 style={styles.text}>Large Title 2</LargeTitle2>
            <LargeTitle style={styles.text}>Large Title</LargeTitle>
            <Title style={styles.text}>Title</Title>
            <Title2 style={styles.text}>Title 2</Title2>
            <Title3 style={styles.text}>Title 3</Title3>
            <Headline style={styles.text}>Headline</Headline>
            <SubHeadline style={styles.text}>SubHeadline</SubHeadline>
            <SubHeadline2 style={styles.text}>SubHeadline 2</SubHeadline2>
            <Body>Body</Body>
            <Body2>Body 2</Body2>
            <Caption>Caption</Caption>
            <Text style={styles.typography}>Button Text</Text>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.horizonBlue,
    margin: Platform.select({ web: 0, native: undefined })
  },
  typography: {
    ...Typography.button
  }
});

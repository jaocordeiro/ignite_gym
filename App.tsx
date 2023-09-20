import { Text, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { SignUp } from "@screens/SignUp";
import { THEME } from "./src/theme";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoades ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}

import { Text, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SignIn } from '@screens/SignIn';
import { THEME } from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoades] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoades ?
        <SignIn/>
        :
        <Loading/>
      }
    </NativeBaseProvider>
  );
}

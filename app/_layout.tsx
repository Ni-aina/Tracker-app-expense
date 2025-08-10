import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { ScreenHistoryProvider } from '@/context/screenHistory';
import { useColorScheme } from '@/hooks/useColorScheme';

const RootLayout = ()=> {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ScreenHistoryProvider>
        <Stack>
          <Stack.Screen name="(expenses)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ScreenHistoryProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  )
}

export default RootLayout;

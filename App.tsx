import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from '@theme/index'
import { Loading } from '@components/Loading'

import { NewGroup } from '@screens/NewGroup'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  )
}

export default App

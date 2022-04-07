import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from './src/navigations'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFBFB',
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={RootNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

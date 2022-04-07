import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Section } from './src/lib/components'

function HomeScreen() {
  return (
    <>
      <Section>
        <Text>Good Afternoon,</Text>
        <Text>Sarina!</Text>
      </Section>

      <Section padding={0}>
        <Section>
          <Text>How are you feeling today ?</Text>
        </Section>

        <Section scrollable horizontal>
          <View>
            <Text>Happy</Text>
          </View>

          <View>
            <Text>Calm</Text>
          </View>

          <View>
            <Text>Manic</Text>
          </View>

          <View>
            <Text>Angry</Text>
          </View>
        </Section>
      </Section>
    </>
  )
}

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

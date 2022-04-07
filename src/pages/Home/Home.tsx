import React from 'react'
import { Text, View } from 'react-native'

import { Section } from '../../lib/components'

const Home = () => {
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

export default Home

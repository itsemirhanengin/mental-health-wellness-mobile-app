import React from 'react'
import { Text, View } from 'react-native'

import { Section } from '../../../../lib/components'
import IconHappy from './icons/IconHappy'
import IconCalm from './icons/IconCalm'
import IconManic from './icons/IconManic'

type Props = {
  title?: string
}

const Mood: React.FC<Props> = ({ title }) => (
  <Section padding={0}>
    <Section>
      <Text>{title}</Text>
    </Section>

    <Section scrollable horizontal>
      <View>
        <View>
          <IconHappy />
        </View>

        <Text>Happy</Text>
      </View>

      <View>
        <View>
          <IconCalm />
        </View>

        <Text>Calm</Text>
      </View>

      <View>
        <View>
          <IconManic />
        </View>

        <Text>Manic</Text>
      </View>

      <View>
        <Text>Angry</Text>
      </View>
    </Section>
  </Section>
)

export default Mood

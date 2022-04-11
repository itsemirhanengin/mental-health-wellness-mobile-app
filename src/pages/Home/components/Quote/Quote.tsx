import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { IconQuote } from './icons'
import { Section } from '../../../../lib/components'

const Quote: React.FC = () => (
  <Section style={styles.section}>
    <View style={styles.card}>
      <Text style={styles.text}>
        “It is better to conquer yourself than to win a thousand battles”
      </Text>

      <IconQuote />
    </View>
  </Section>
)

const styles = StyleSheet.create({
  section: {
    marginBottom: 26,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F6F6',
    borderRadius: 16,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  text: {
    flex: 1,
    paddingRight: 15,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.01,
    color: '#707070',
  },
})

export default Quote

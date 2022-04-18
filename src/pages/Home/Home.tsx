import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Page, Section } from '../../lib/components'
import { Categories, Mood, PlanExpired, Quote, Session } from './components'

const Home = () => (
  <Page>
    <Section style={styles.heading}>
      <Text style={styles.title}>Good Afternoon,</Text>

      <Text style={[styles.title, styles.name]}>Sarina!</Text>
    </Section>

    <Mood title="How are you feeling today ?" />

    <Session
      title="1 on 1 Sessions"
      description="Let’s open up to the things that matter the most"
      onPress={() => console.log('pressed')}
    />

    <Categories />

    <Quote>
      “It is better to conquer yourself than to win a thousand battles”
    </Quote>

    <PlanExpired
      title="Plan Expired"
      description="Get back chat access and session credits"
      onPress={() => console.log('pressed')}
    />
  </Page>
)

const styles = StyleSheet.create({
  heading: {
    marginBottom: 26,
  },

  title: {
    fontSize: 26,
    lineHeight: 32,
    color: '#371B34',
    fontWeight: '500',
  },

  name: {
    fontWeight: '700',
  },
})

export default Home

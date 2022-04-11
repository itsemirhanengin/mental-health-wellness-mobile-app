import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Mood } from './components/Mood'
import { Page, Section } from '../../lib/components'

const Home = () => {
  return (
    <Page>
      <Section style={styles.heading}>
        <Text style={styles.title}>Good Afternoon,</Text>
        <Text style={[styles.title, styles.name]}>Sarina!</Text>
      </Section>

      <Mood title="How are you feeling today ?" />
    </Page>
  )
}

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

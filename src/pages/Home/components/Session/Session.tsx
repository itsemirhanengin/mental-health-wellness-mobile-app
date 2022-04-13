import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { IconBackground, IconCalendar, IconMeetup } from './icons'
import { Section, TouchableOpacity } from '../../../../lib/components'

const Session: React.FC = () => (
  <Section style={styles.section}>
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>1 on 1 Sessions</Text>

        <Text style={styles.description}>
          Let’s open up to the things that matter the most
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>

          <IconCalendar />
        </View>
      </View>

      <View style={styles.icon}>
        <IconMeetup />
      </View>

      <View style={styles.background}>
        <IconBackground />
      </View>
    </TouchableOpacity>
  </Section>
)

const styles = StyleSheet.create({
  section: {
    marginBottom: 26,
  },

  container: {
    backgroundColor: '#FEF3E7',
    paddingVertical: 24,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },

  background: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  left: {
    paddingLeft: 20,
    flex: 1,
  },

  title: {
    fontSize: 22,
    color: '#573926',
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 6,
  },

  description: {
    fontSize: 12,
    flex: 1,
    color: '#573926',
    lineHeight: 18,
    opacity: 0.9,
    marginBottom: 14,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#FE8235',
    marginRight: 6,
  },

  icon: {
    paddingHorizontal: 28,
  },
})

export default Session

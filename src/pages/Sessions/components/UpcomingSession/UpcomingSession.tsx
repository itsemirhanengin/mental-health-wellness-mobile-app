import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { IconBackground, IconPlay } from './icons'
import { Section, TouchableOpacity } from '../../../../lib/components'

const UpcomingSession: React.FC = () => (
  <Section style={styles.section}>
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Upcoming Session</Text>

        <Text style={styles.description}>
          Sahana V, Msc in Clinical Psychology
        </Text>

        <Text style={styles.date}>7:30 PM - 8:30 PM</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Join Now</Text>

          <IconPlay />
        </View>
      </View>

      <View style={styles.background}>
        <IconBackground />
      </View>
    </TouchableOpacity>
  </Section>
)

const styles = StyleSheet.create({
  section: {
    marginBottom: 28,
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
    marginBottom: 6,
  },

  date: {
    fontSize: 12,
    fontWeight: '700',
    color: '#573926',
    marginBottom: 8,
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

export default UpcomingSession

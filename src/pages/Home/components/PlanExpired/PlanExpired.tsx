import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Section, TouchableOpacity } from '../../../../lib/components'
import { IconArrowRight, IconBackground, IconMeditation } from './icons'

type Props = {
  description?: string
  onPress?: () => void
  title?: string
}

const PlanExpired: React.FC<Props> = ({ description, onPress, title }) => (
  <Section>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Buy More</Text>

          <IconArrowRight />
        </View>
      </View>

      <View style={styles.icon}>
        <IconMeditation />
      </View>

      <View style={styles.background}>
        <IconBackground />
      </View>
    </TouchableOpacity>
  </Section>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55A06F',
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
    color: '#fff',
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 6,
  },

  description: {
    fontSize: 12,
    flex: 1,
    color: '#fff',
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
    color: '#fff',
    marginRight: 6,
  },

  icon: {
    paddingHorizontal: 28,
  },
})

export default PlanExpired

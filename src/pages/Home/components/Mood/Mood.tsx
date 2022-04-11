import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { IconAngry, IconCalm, IconHappy, IconManic, IconSad } from './icons'
import { Section, TouchableOpacity } from '../../../../lib/components'

type Props = {
  title?: string
}

const Mood: React.FC<Props> = ({ title }) => (
  <Section padding={0} style={styles.section}>
    <Section style={styles.heading}>
      <Text style={styles.title}>{title}</Text>
    </Section>

    <Section scrollable horizontal style={styles.items}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemIcon}>
          <IconHappy />
        </View>

        <Text style={styles.itemTitle}>Happy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemIcon}>
          <IconCalm />
        </View>

        <Text style={styles.itemTitle}>Calm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemIcon}>
          <IconManic />
        </View>

        <Text style={styles.itemTitle}>Manic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemIcon}>
          <IconAngry />
        </View>

        <Text style={styles.itemTitle}>Angry</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, { marginRight: 0 }]}>
        <View style={styles.itemIcon}>
          <IconSad />
        </View>

        <Text style={styles.itemTitle}>Sad</Text>
      </TouchableOpacity>
    </Section>
  </Section>
)

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
  },

  heading: {
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    lineHeight: 16,
    color: '#371B34',
    fontWeight: '500',
  },

  items: {
    paddingBottom: 12,
  },

  item: {
    alignItems: 'center',
    marginRight: 24,
  },

  itemIcon: {
    marginBottom: 10,
  },

  itemTitle: {
    fontSize: 12,
    lineHeight: 12,
    color: '#828282',
    fontWeight: '500',
  },
})

export default Mood

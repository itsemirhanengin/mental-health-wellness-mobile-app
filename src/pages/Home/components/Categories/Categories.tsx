import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Section, TouchableOpacity } from '../../../../lib/components'
import { IconJournal, IconLibrary } from './icons'

const Categories: React.FC = () => (
  <Section style={styles.row}>
    <TouchableOpacity style={[styles.item, { marginRight: 15 }]}>
      <View style={styles.icon}>
        <IconJournal />
      </View>

      <Text style={styles.text}>Journal</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <View style={styles.icon}>
        <IconLibrary />
      </View>

      <Text style={styles.text}>Library</Text>
    </TouchableOpacity>
  </Section>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F4F3F1',
    borderRadius: 16,
    height: 60,
  },

  icon: {
    marginRight: 15,
  },

  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#573926',
  },
})

export default Categories

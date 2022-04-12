import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { IconChat, IconCommunity, IconHome, IconSessions } from './icons'
import { TouchableOpacity } from '../TouchableOpacity'

const TabBar: React.FC = () => {
  return (
    <SafeAreaView style={styles.tab}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
          <IconHome />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconSessions />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconChat />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconCommunity />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 12,
    elevation: 4,
  },

  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },

  item: {},
})

export default TabBar

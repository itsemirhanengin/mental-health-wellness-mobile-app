import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  IconActiveChat,
  IconActiveCommunity,
  IconActiveHome,
  IconActiveSessions,
  IconChat,
  IconCommunity,
  IconHome,
  IconSessions,
} from './icons'
import { TouchableOpacity } from '../TouchableOpacity'

const TabBar: React.FC = () => {
  const navigation = useNavigation()

  const { index } = navigation.getState()

  return (
    <SafeAreaView style={styles.tab}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
          {index === 0 && (
            <>
              <View style={styles.indicator} />

              <IconActiveHome />
            </>
          )}

          {index !== 0 && <IconHome />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {index === 1 && (
            <>
              <View style={styles.indicator} />

              <IconActiveSessions />
            </>
          )}

          {index !== 1 && <IconSessions />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {index === 2 && (
            <>
              <View style={styles.indicator} />

              <IconActiveChat />
            </>
          )}

          {index !== 2 && <IconChat />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {index === 3 && (
            <>
              <View style={styles.indicator} />

              <IconActiveCommunity />
            </>
          )}

          {index !== 3 && <IconCommunity />}
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
    overflow: 'hidden',
  },

  item: {
    position: 'relative',
  },

  indicator: {
    width: 12,
    height: 12,
    backgroundColor: '#FE8235',
    borderRadius: 12,
    position: 'absolute',
    top: -18,
    left: 20,
  },
})

export default TabBar

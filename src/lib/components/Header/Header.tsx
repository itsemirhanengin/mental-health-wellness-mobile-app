import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IconNotification } from '../../icons'

import { TouchableOpacity } from '../TouchableOpacity'

const Header: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.avatar}>
          <Image source={require('../../assets/avatar.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notifications}>
          <IconNotification />

          <View style={styles.notificationsBadge}>
            <Text style={styles.notificationsBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    borderWidth: 4,
    borderColor: 'rgba(240, 158, 84, 0.48)',
    borderRadius: 35,
  },

  notifications: {
    position: 'relative',
  },

  notificationsBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FE8235',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationsBadgeText: {
    fontSize: 12,
    color: '#FBFBFB',
    fontWeight: '500',
  },
})

export default Header

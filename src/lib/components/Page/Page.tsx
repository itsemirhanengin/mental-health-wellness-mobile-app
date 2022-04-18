import React from 'react'
import { EventRegister } from 'react-native-event-listeners'
import { ScrollView } from 'react-native'

const Page: React.FC = ({ children }) => (
  <ScrollView
    contentContainerStyle={{
      paddingTop: 4,
      paddingBottom: 28,
    }}
    onScroll={({ nativeEvent }) => {
      const y = nativeEvent.contentOffset.y

      EventRegister.emit('page', y)
    }}
    scrollEventThrottle={16}
  >
    {children}
  </ScrollView>
)

export default Page

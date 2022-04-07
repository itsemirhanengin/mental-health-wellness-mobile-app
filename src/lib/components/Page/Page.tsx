import React from 'react'
import { ScrollView } from 'react-native'

const Page: React.FC = ({ children }) => (
  <ScrollView contentContainerStyle={{ paddingTop: 4, paddingBottom: 28 }}>
    {children}
  </ScrollView>
)

export default Page

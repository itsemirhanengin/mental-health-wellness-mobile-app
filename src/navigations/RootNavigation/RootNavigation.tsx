import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home as HomeScreen } from '../../pages'
import { Header } from '../../lib/components'

const Tab = createBottomTabNavigator()

const RootNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Group
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Group>
  </Tab.Navigator>
)

export default RootNavigation

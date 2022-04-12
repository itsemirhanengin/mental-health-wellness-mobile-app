import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Header, TabBar } from '../../lib/components'

import { Home as HomeScreen } from '../../pages'

const Tab = createBottomTabNavigator()

const RootNavigation: React.FC = () => (
  <Tab.Navigator tabBar={() => <TabBar />}>
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

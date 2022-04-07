import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home as HomeScreen } from '../../pages'

const Tab = createBottomTabNavigator()

const RootNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
)

export default RootNavigation
